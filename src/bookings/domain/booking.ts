export interface Booking {
  patient_name: string;
  patient_surname: string;
  debtor_name: string;
  debtor_surname: string;
  uid: number;
  entity_uid: number;
  diary_uid: number;
  booking_type_uid: number;
  booking_status_uid: number;
  patient_uid: number;
  start_time: string;
  duration: number;
  treating_doctor_uid?: number;
  reason: string;
  invoice_nr: string;
  cancelled: boolean;
}

export interface ApiResponse {
  status: string;
  data: Booking[];
}
