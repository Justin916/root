import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import {
    FormBuilder,
    FormGroup,
    Validators,
    FormControl,
} from "@angular/forms";

import { FuseConfigService } from "@fuse/services/config.service";
import { fuseAnimations } from "@fuse/animations";
import { ActivatedRoute, Router } from "@angular/router";
import { ILoginData } from "./interfaces/ILoginData";
import { Login2Service } from "./login-2.service";

@Component({
    selector: "login-2",
    templateUrl: "./login-2.component.html",
    styleUrls: ["./login-2.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class Login2Component implements OnInit {
    loginForm: FormGroup;

    firstLevelAuthComplete: Boolean = false;

    @Input()
    loginData: ILoginData;
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _loginService: Login2Service
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true,
                },
                toolbar: {
                    hidden: true,
                },
                footer: {
                    hidden: true,
                },
                sidepanel: {
                    hidden: true,
                },
            },
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            userId: ["", [Validators.required]],
            password: ["", Validators.required],
            otp: new FormControl({ value: "", disabled: true }, null),
        });
        console.log("Log Validation :" + this.loginForm.invalid);
    }

    onSubmit(): void {
        if (this.firstLevelAuthComplete) {
            this._router.navigateByUrl("/home/create-patient");
        } else {
            this.firstLevelAuthComplete = true;
            console.log("firstLevelAuthComplete ", this.firstLevelAuthComplete);
            console.log("onSubmit called" + this.loginForm.value);
            this._loginService.auth1(this.loginForm.value);
            this.loginForm = this._formBuilder.group({
                userId: new FormControl(
                    { value: this.loginForm.value.userId, disabled: true },
                    Validators.required
                ),
                password: new FormControl(
                    { value: this.loginForm.value.password, disabled: true },
                    Validators.required
                ),
                otp: new FormControl("", Validators.required),
            });
        }
    }
}
