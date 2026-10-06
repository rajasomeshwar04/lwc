import { LightningElement } from 'lwc';

export default class Foo extends LightningElement {
    connectedCallback() {
        this.querySelector?.('button').firstElementChild.id;
    }
}

export default class Foo extends LightningElement {
    connectedCallback() {
        this.dispatchEvent(new CustomEvent('customevent'));
    }
}
