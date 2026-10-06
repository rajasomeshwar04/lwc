import { LightningElement } from 'lwc';

export default class Foo extends LightningElement {
    hasRendered = false;

    renderedCallback() {
        if (this.hasRendered) {
            return;
        }
        this.hasRendered = true;

        const button = this.template.querySelector('button');
        button?.addEventListener('click', this.handleClick);
    }

    disconnectedCallback() {
        this.template
            .querySelector('button')
            ?.removeEventListener('click', this.handleClick);
    }

    // arrow function keeps `this` bound to the component
    handleClick = (event) => {
        console.log('clicked', event.target);
        this.dispatchEvent(
            new CustomEvent('customevent', {
                detail: { clickedAt: Date.now() },
                bubbles: true
            })
        );
    };
}
