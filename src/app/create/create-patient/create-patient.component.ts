import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatStepperModule } from "@angular/material/stepper";

@Component({
    selector: "app-create-patient",
    templateUrl: "./create-patient.component.html",
    styleUrls: ["./create-patient.component.scss"],
})
export class CreatePatientComponent implements OnInit {
    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ["", Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ["", Validators.required],
        });
        this.thirdFormGroup = this._formBuilder.group({
            secondCtrl: ["", null],
        });
    }
}
