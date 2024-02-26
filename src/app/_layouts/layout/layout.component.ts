import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  sideBarOpen = true;

  // sideBarToggler() {
  //   this.sideBarOpen = !this.sideBarOpen;
  // }

  constructor(private breakpointObserver: BreakpointObserver) { }
  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
    ]).subscribe(result => {
      if (result.matches) {
        this.sideBarOpen = false; // Automatically close the sidebar on small devices
      }
    });
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
