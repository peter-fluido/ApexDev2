import { LightningElement, api, wire } from "lwc";
import { bikes } from "c/data";

// Import message service features required for publishing and the message channel
import { publish, MessageContext } from "lightning/messageService";
import SampleMessageChannel from "@salesforce/messageChannel/SampleMessageChannel__c";

export default class Detail extends LightningElement {
    @wire(MessageContext)
    messageContext;

    // Ensure changes are reactive when product is updated
    product;

    // Private var to track @api productId
    _productId = undefined;

    // Use set and get to process the value every time it's
    // requested while switching between products
    set productId(value) {
        this._productId = value;
        this.product = bikes.find((bike) => bike.fields.Id.value === value);
    }

    handleAddToCart() {
        // Fire message on channel
        console.log("Sending!", this.product.fields.Id.value);
        const payload = { data: this.product.fields.Id.value };
        publish(this.messageContext, SampleMessageChannel, payload);
    }

    // getter for productId
    @api get productId() {
        return this._productId;
    }
}
