import { Injectable } from "@angular/core";
import { ILoginData } from "./interfaces/ILoginData";

@Injectable({
    providedIn: "root",
})
export class Login2Service {
    constructor() {}

    auth1(loginData: ILoginData) {
        console.log(loginData);
    }
}
