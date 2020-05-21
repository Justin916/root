import { Component, OnInit } from "@angular/core";
import { ImageCroppedEvent } from "ngx-image-cropper";
import mergeImages from "merge-images";

@Component({
    selector: "app-manage-image",
    templateUrl: "./manage-image.component.html",
    styleUrls: ["./manage-image.component.scss"],
})
export class ManageImageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
    imageChangedEvent: any = "";
    croppedImage: any = "";
    croppedImage1: any = "";
    croppedImage2: any = "";
    fileData: File = null;

    join() {
        //we need to use the merge functionality ...
        //         var c=document.getElementById("myCanvas");
        // var ctx=c.getContext("2d");
        // var imageObj1 = new Image();
        // var imageObj2 = new Image();
        // imageObj1.src = "1.png"
        // imageObj1.onload = function() {
        //    ctx.drawImage(imageObj1, 0, 0, 328, 526);
        //    imageObj2.src = "2.png";
        //    imageObj2.onload = function() {
        //       ctx.drawImage(imageObj2, 15, 85, 300, 300);
        //       var img = c.toDataURL("image/png");
        //       document.write('<img src="' + img + '" width="328" height="526"/>');
        //    }
        // };
    }

    fileChangeEvent1(fileInput: any) {
        this.fileData = <File>fileInput.target.files[0];
        this.preview();
    }

    preview() {
        // Show preview
        var mimeType = this.fileData.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }

        var reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = (_event) => {
            this.croppedImage1 = reader.result;
        };
    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }

    imageLoaded() {
        // show cropper
    }
    loadImageFailed() {
        // show message
    }
}
