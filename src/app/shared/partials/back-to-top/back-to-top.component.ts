import { Component } from '@angular/core';
import { HostListener, ElementRef, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(400)),
    ])
  ]
})
export class BackToTopComponent {
  state = 'void';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e: Event) {
    const offset = 200;
    const backToTop = this.el.nativeElement.querySelector('.back-to-top');

    if (window.scrollY > offset) {
      this.renderer.setStyle(backToTop, 'display', 'block');
      this.state = 'in';
    } else {
      this.state = 'void';
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
