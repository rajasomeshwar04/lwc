import { LightningElement } from 'lwc';
import formFactor from '@salesforce/client/formFactor';

export default class MyComponent extends LightningElement {
    get isDesktop() {
        return formFactor === 'Large';
    }
}
