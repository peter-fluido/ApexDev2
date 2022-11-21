import { LightningElement, wire, track } from "lwc";
import { bikes } from "c/data";

// Import message service features required for subscribing and the message channel
import { subscribe, unsubscribe, APPLICATION_SCOPE, MessageContext } from "lightning/messageService";
import SampleMessageChannel from "@salesforce/messageChannel/SampleMessageChannel__c";

export default class Detail extends LightningElement {
    subscription = null;
    @track
    products = [];
    basketSize = 0;
    title = "Shopping Basket (" + this.basketSize + ")";

    @wire(MessageContext)
    messageContext;

    // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
    subscribeToMessageChannel() {
        console.log("Subscribing...");
        if (!this.subscription) {
            this.subscription = subscribe(this.messageContext, SampleMessageChannel, (message) => this.handleMessage(message), {
                scope: APPLICATION_SCOPE
            });
        }
    }

    unsubscribeToMessageChannel() {
        console.log("Unsubscribing...");
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    // Handler for message received by component
    handleMessage(message) {
        console.log("Received message:", message, message.data);
        let product = bikes.find((bike) => bike.fields.Id.value === message.data);
        console.log("Got product: ", product, product.fields, product.fields.Name, product.fields.Name.value);
        this.products.push(product);
        this.basketSize++;
        this.title = "Shopping Basket (" + this.basketSize + ")";
    }

    removeHandler(event) {
        console.log(event);
    }

    // Standard lifecycle hooks used to subscribe and unsubsubscribe to the message channel
    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }
}
