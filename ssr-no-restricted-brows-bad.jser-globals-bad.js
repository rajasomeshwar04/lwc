import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    connectedCallback() {
        const width = window.innerWidth;
        const element = document.querySelector('.container');
        const userAgent = navigator.userAgent;
        localStorage.setItem('key', 'value');
    }
}
