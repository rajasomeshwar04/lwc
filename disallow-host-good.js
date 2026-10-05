import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    renderedCallback() {
        this.setAttribute('role', 'button');
        this.classList.add('active');
        this.style.color = 'red';
    }
}