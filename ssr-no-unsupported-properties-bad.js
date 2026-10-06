import { LightningElement } from 'lwc';

export default class Foo extends LightningElement {
    connectedCallback() {
        if (import.meta.env.SSR) {
            this.querySelector('span')?.getAttribute('role');
        }
    }
}

export default class Foo extends LightningElement {
    connectedCallback() {
        if (!import.meta.env.SSR) {
            this.dispatchEvent(new CustomEvent('customevent'));
        }
    }
}
