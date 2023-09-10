import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core'; // Import ElementRef
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import * as ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.scss']
})
export class BanerComponent implements OnInit, AfterViewInit { // Corrected AfterViewInit
  constructor(private breakpointObserver: BreakpointObserver, private el: ElementRef) { } // Inject ElementRef

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    console.log(this.el.nativeElement); // Add this line
  
    ScrollReveal().reveal(this.el.nativeElement, { 
      distance: '5000px',
      duration: 2500,
      easing: 'ease-in',
      origin: 'bottom',
      reset: true
    });
  }
  
}
