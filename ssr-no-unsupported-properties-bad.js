 import { LightningElement } from 'lwc';                                                                                                                                            
                                                                                                                                                                                     
  export default class Foo extends LightningElement {                                                                                                                                
      connectedCallback() {                                                                                                                                                          
          this.dispatchEvent(new CustomEvent('loaded'));            // line 5 ✗                                                                                                      
          this.querySelector('span').classList.add('active');      // line 6 ✗                                                                                                       
          this.querySelectorAll('li').forEach((li) => li.remove()); // line 7 ✗                                                                                                      
          this.firstChild.textContent = 'Hello';                    // line 8 ✗                                                                                                      
          const width = this.getBoundingClientRect().width;         // line 9 ✗                                                                                                      
      }                                                                                                                                                                              
  }                     
