interface Debtor {
  debtor_cellnr: string;
  debtor_email: string;
  debtor_gender: string;
  debtor_idnumber: string;
  debtor_idtype: number;
  debtor_initials: string;
  debtor_name: string;
  debtor_surname: string;
  debtor_title: string;
  debtor_type: string;
  fin_summary?: {
    entity_id: number;
  };
  goodx_entitynr?: number;
  ma_switchable?: boolean;
}

interface Patient {
  patient_dbid: number;
  patient_name: string;
  patient_email: string;
  patient_title: string;
  patient_cellnr: string;
  patient_gender: string;
  patient_idtype: number;
  patient_surname: string;
  patient_idnumber: string;
}

export interface Appointment {
  booking_status?: string;
  booking_status_uid?: number;
  booking_type?: string;
  booking_type_uid?: number;
  cancelled: boolean;
  debtor: {
    debtor: Debtor;
    patients: Patient[];
    selected_patient_id?: number;
  };
  description?: string;
  diary_uid?: number;
  duration?: number;
  entity_uid?: number;
  invoice_nr?: string | null;
  patient_uid?: number | null;
  reason?: string;
  start_time?: string;
  treating_doctor_uid?: number;
  uid: number;
}
