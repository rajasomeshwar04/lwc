import { LightningElement, readonly } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

// lightning/navigation is not available during SSR
export default class MyComponent extends NavigationMixin(LightningElement) {
    connectedCallback() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: { recordId: '001xx000003DGbYAAW', actionName: 'view' }
        });
    }
}
