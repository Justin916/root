import { Injectable } from "@angular/core";
import { ILoginData } from "./interfaces/ILoginData";
import { Observable } from "rxjs";
import { ILoginReponse } from "./interfaces/ILoginResponse";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class Login2Service {
    constructor(private _client: HttpClient) {}

    auth1(loginData: ILoginData): ILoginReponse {
        console.log(loginData);
        let response: ILoginReponse;
        this._client
            .get<ILoginReponse>(
                "http://localhost:8080/auth/login-2/Justin1/Password"
            )
            .subscribe(
                (res) => {
                    console.log(res);
                    response = res;
                },
                (error) => console.log(error)
            );
        return response;
    }
}
