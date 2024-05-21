import Cookies from "js-cookie";
import { ApiResponse } from "../domain/booking";

export const createBooking = async (
  entity_uid: number,
  diary_uid: number,
  booking_type_uid: number,
  booking_status_uid: number,
  start_time: string,
  duration: number,
  patient_uid: number,
  reason: string
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

  const body = JSON.stringify({
    model: {
      entity_uid: 1,
      diary_uid: 1,
      booking_type_uid: 1,
      booking_status_uid,
      start_time: `${start_time}`,
      duration,
      patient_uid,
      reason,
      cancelled: false,
    },
  });

  try {
    const response = await fetch(`/api/booking`, {
      method: "POST",
      headers,
      body,
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw new Error("Failed to create booking");
  }
};
