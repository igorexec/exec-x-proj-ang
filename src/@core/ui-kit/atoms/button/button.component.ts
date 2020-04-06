import { Component } from '@angular/core'

@Component({
  selector: 'arb-button',
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {}
