import { LightningElement, track, wire } from "lwc";
import { registerListener, unregisterAllListeners } from "c/pubsub";
import { CurrentPageReference } from "lightning/navigation";
export default class MySubscriber extends LightningElement {
    @track texts = [];
    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        registerListener("mytextevent", this.setTexts, this);
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    setTexts(theText) {
        this.texts.push(theText);
    }
}
