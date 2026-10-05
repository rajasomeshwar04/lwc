import { LightningElement } from 'lwc';
import userId from '@salesforce/user/Id';
import hasPermission from '@salesforce/customPermission/MyPermission';

export default class MyComponent extends LightningElement {
    get currentUserId() {
        return userId;
    }

    get canAccess() {
        return hasPermission;
    }
}
