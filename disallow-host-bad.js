import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    connectedCallback() {
        this.setAttribute('role', 'button');
        this.classList.add('active');
        this.style.color = 'red';
    }
}