import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  // Sidenav open & close behavior
  events: string[] = [];
  opened: boolean;
// Sidenav with configurable mode
  mode = new FormControl('over');
  constructor() { }

  ngOnInit(): void {
  }

}
