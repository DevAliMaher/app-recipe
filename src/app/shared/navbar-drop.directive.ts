import { Directive, OnInit, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector: '[appNavDropDown]'
})

export class NavDropDownDirective implements OnInit{
    @Input('appNavDropDown') id:string;
    targetElement: HTMLElement;

    constructor(private renderer: Renderer2) {}

    ngOnInit() {
        this.targetElement = document.getElementById(this.id);
    }
    
    
    @HostListener('click', ["$event"]) showDropDown(event: Event) {
        event.stopPropagation();
        if (!this.targetElement.classList.contains('show')) {
            this.renderer.addClass(this.targetElement, 'show');
        } else {
            this.renderer.removeClass(this.targetElement, 'show');
        }
    }

    @HostListener('document:click') hideDropDown() {
        if (this.targetElement.classList.contains('show')) {
            this.renderer.removeClass(this.targetElement, 'show');
        } else {
            
        }
    }

}