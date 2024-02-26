import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from '../../_services/_authentications/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private auth: AuthenticationService
    ) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logout() {
    this.auth.logout();
}

}