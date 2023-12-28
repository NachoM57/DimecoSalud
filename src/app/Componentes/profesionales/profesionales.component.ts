import { Component } from '@angular/core';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent {

  showScrollToTopButton = false;

  constructor() { }

  ngOnInit(): void {

    window.addEventListener('scroll', this.checkScroll, { passive: true });

  }



  ngOnDestroy() {
    // Es importante remover el listener cuando el componente ya no está en uso.
    window.removeEventListener('scroll', this.checkScroll, { passive: true } as any);

  }


  checkScroll = (): void => {
    // Puedes ajustar el valor 100 al número de pixels que prefieras
    this.showScrollToTopButton = window.pageYOffset > 100;
  };

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
