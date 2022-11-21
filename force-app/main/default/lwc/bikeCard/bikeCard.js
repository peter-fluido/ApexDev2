import { LightningElement } from "lwc";

export default class BikeCard extends LightningElement {
    bike = {
        name: "Electra X4",
        description: "A sweet bike built for comfort",
        material: "Steel",
        category: "Mountain",
        pictureUrl: "https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg"
    };
}
