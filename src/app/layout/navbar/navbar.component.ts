import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  dropdown: boolean = false;
  navItemsToggel: boolean = false;

  toggleProfileDropdown(): void {
    this.dropdown = !this.dropdown;
  }

  toggelNavItems(): void {
    this.navItemsToggel = !this.navItemsToggel;
  }
}
