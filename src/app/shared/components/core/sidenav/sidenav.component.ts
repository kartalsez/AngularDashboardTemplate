import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CoreService } from '../../../services/core/core.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SideNavComponent implements OnInit {
  @Input() drawer: any;
  menuItems = [];

  constructor(private coreService: CoreService) {
  }

  ngOnInit(): void {
    this.menuItems = this.coreService.menuItems;
  }
}
