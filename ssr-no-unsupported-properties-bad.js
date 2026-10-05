import { LightningElement } from 'lwc';

export default class Foo extends LightningElement {
    connectedCallback() {
        this.querySelector('span')?.getAttribute?.('role');
    }
}

export default class Foo extends LightningElement {
    connectedCallback() {
        this.dispatchEvent(new CustomEvent('customevent'));
    }
}
