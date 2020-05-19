import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditorHolderComponent } from "./editor-holder/editor-holder.component";
import { sample } from "rxjs/operators";
import { CreatePatientComponent } from "app/create/create-patient/create-patient.component";

const routes: Routes = [
    {
        path: "home",
        component: EditorHolderComponent,
        children: [
            { path: "create-patient", component: CreatePatientComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class EditorRoutingModule {}
