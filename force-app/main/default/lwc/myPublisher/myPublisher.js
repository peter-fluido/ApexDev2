import { LightningElement, wire } from "lwc";
import { CurrentPageReference } from "lightning/navigation";
import { fireEvent } from "c/pubsub";

export default class MyPublisher extends LightningElement {
    myText = "";
    @wire(CurrentPageReference) pageRef;

    handleChange(event) {
        this.myText = event.target.value;
    }

    displayTexts() {
        fireEvent(this.pageRef, "mytextevent", this.myText);
    }
}
