import { Component } from '@angular/core';

@Component({
  selector: 'app-floating-message',
  templateUrl: './floating-message.component.html',
  styleUrls: ['./floating-message.component.css']
})
export class FloatingMessageComponent {
  isDropdownVisible = false;
  isMessageVisible = true;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  closeMessage() {
    this.isMessageVisible = false;
  }
}
