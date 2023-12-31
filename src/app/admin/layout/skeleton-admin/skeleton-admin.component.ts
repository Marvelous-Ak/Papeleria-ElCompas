import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-skeleton-admin',
  templateUrl: './skeleton-admin.component.html',
  styleUrls: ['./skeleton-admin.component.scss'],
})
export class SkeletonAdminComponent {
  
isSideNavCollapsed = false;
screenWidth = 0;

onToggleSidenav(data: SideNavToggle): void {
  this.screenWidth = data.screenWidth;
  this.isSideNavCollapsed = data.collapsed;
  }
}
