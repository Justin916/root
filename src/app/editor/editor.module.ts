import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EditorRoutingModule } from "./editor-routing.module";
import { EditorHolderComponent } from "./editor-holder/editor-holder.component";
import { CreateModule } from "app/create/create.module";

@NgModule({
    declarations: [EditorHolderComponent],
    imports: [CommonModule, EditorRoutingModule, CreateModule],
})
export class EditorModule {}
