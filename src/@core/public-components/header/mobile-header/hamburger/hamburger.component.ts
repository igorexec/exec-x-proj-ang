import { Component, Output, EventEmitter, Input } from '@angular/core'

@Component({
  selector: 'arb-hamburger',
  styleUrls: ['./hamburger.component.scss'],
  template: '<span class="hamburger" [class.hamburger--opened]="isOpen" (click)="onClick()"></span>',
})
export class HamburgerComponent {
  @Input() isOpen: boolean
  @Output() toggle = new EventEmitter<boolean>()

  onClick() {
    this.toggle.emit()
  }
}
