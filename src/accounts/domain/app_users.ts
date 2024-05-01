import momentTimezone, { Moment } from "moment-timezone";
import { CreatedBy } from "../../models/created-by";
import { Construct } from "../../models/construct";

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResponse {
  uid: string;
}
export enum AccountErrorType {
  IncorrectEmailOrPassword = "incorrect_email_or_password",
  Login = "login",
}

export class LoginError {
  constructor(public error?: AccountErrorType) {}
}

export class LoginSuccess {
  constructor(public token: string, public userId: string) {}
}

export class User {
  readonly userId: string = "";
  readonly firstName: string = "";
  readonly lastName: string = "";
  readonly cellphone: string = "";
  readonly email: string = "";
  readonly dateOfBirth: string = "";
  readonly createdAt: Moment | undefined;
  readonly createdBy: CreatedBy | undefined;

  constructor(init: Construct<User>) {
    Object.assign(this, init);
  }

  static fromNetwork(init: NetworkUser): User {
    return new User({
      userId: init.user_id,
      firstName: init.first_name,
      lastName: init.last_name,
      cellphone: init.cellphone,
      email: init.email,
      dateOfBirth: init.date_of_birth,
      createdAt: momentTimezone(init.created_at),
      createdBy: init.created_by,
    });
  }
}

export interface NetworkUser {
  token: any;
  success: any;
  error: any;
  user_id: string;
  first_name: string;
  last_name: string;
  cellphone: string;
  email: string;
  date_of_birth: string;
  created_at: Moment;
  created_by: CreatedBy;
}
