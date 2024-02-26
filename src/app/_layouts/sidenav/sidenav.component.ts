import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {


  isSubMenuOpen: { [key: string]: boolean } = {};

  toggleSubMenu(subMenuId: string): void {
    // Toggle the open/close state for the specified submenu
    this.isSubMenuOpen[subMenuId] = !this.isSubMenuOpen[subMenuId];

    // Close other open submenus if needed
    Object.keys(this.isSubMenuOpen)
      .filter(key => key !== subMenuId)
      .forEach(key => this.isSubMenuOpen[key] = false);
  }

}