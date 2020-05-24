import { Injectable } from "@angular/core";
import { ILoginData } from "./interfaces/ILoginData";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class Login2Service {
    constructor(private _client: HttpClient) {}

    auth1(loginData: ILoginData) {
        console.log(loginData);
        this._client
            .get("http://localhost:8080/auth/login-2/Justin1/Password")
            .subscribe((value) => {
                console.log(value);
            });
    }
}
