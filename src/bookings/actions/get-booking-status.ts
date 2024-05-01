import Cookies from "js-cookie";
import { ApiResponse } from "../domain/booking";

export const getBookingStatus = async (
  entity_id: number,
  diary_id: number
): Promise<ApiResponse> => {
  const session_id = Cookies.get("session_id");
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
  const fields = ["uid", "entity_uid", "diary_uid", "name"];

  const filter = [
    "AND",
    ["=", ["I", "entity_uid"], ["L", entity_id]],
    ["=", ["I", "diary_id"], ["L", diary_id]],
  ];

  queryParams.append("fields", JSON.stringify(fields));
  queryParams.append("filter", JSON.stringify(filter));

  try {
    const response = await fetch(
      `/api/booking_status?${queryParams.toString()}`,
      {
        headers,
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching booking status:", error);
    throw new Error("Failed to fetch booking status");
  }
};
