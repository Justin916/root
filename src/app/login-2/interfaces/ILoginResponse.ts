import { Optional } from "@angular/core";

export interface ILoginReponse {
    userId: String;
    password: String;
    firstName: String;
    lastName: String;
    otp?: String;
}
