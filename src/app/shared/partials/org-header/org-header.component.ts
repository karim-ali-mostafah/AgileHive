import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-org-header',
  templateUrl: './org-header.component.html',
  styleUrls: ['./org-header.component.css']
})
export class OrgHeaderComponent {
  isScrolled = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollTop > 100;
  }
}
