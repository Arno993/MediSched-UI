import Cookies from "js-cookie";
import { ApiResponse } from "../domain/booking";
import { ViewType } from "../../components/navbar";

export const getBooking = async (
  diary_id: number,
  startDate: string,
  endDate: string,
  view: ViewType
): Promise<ApiResponse> => {
  const session_id = Cookies.get("session_id");

  const start = startDate.split("T")[0];
  const end = endDate.split("T")[0];

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(session_id
      ? {
          Cookie: `${document.cookie}; session_id=${session_id.replace(
            /"/g,
            ""
          )}`,
        }
      : {}),
  };

  const queryParams = new URLSearchParams();
  queryParams.append(
    "fields",
    JSON.stringify([
      "uid",
      "debtor",
      "entity_uid",
      "diary_uid",
      "patient_uid",
      "booking_type_uid",
      "booking_status_uid",
      "start_time",
      "duration",
      "treating_doctor_uid",
      "reason",
      "invoice_nr",
      "cancelled",
    ])
  );

  const filter = [
    "AND",
    ["=", ["I", "diary_uid"], ["L", diary_id]],
    [">=", ["::", ["I", "start_time"], ["I", "date"]], ["L", start]],
    ["<=", ["::", ["I", "start_time"], ["I", "date"]], ["L", end]],
  ];

  queryParams.append("filter", JSON.stringify(filter));

  try {
    const response = await fetch(`/api/booking?${queryParams.toString()}`, {
      headers,
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw new Error("Failed to fetch bookings");
  }
};
