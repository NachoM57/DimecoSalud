import { Component, OnInit, HostListener} from '@angular/core';
import { DataService } from 'src/app/Componentes/service/data.service';

@Component({
  selector: 'app-barranavegacion2',
  templateUrl: './barranavegacion2.component.html',
  styleUrls: ['./barranavegacion2.component.css']
})
export class Barranavegacion2Component implements OnInit {
  navbar: any = []
  isSticky: boolean = false;


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.dataService.getDatos().subscribe(data => {
      //definir informacion a mostrar;
      this.navbar = data.navbar;
      this.navbar = data.navbar;
    })

  }

  navigateTo(event: Event, elementId: string): void {
    event.preventDefault(); // Prevenir la navegación por defecto
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
}




  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= 100) { // Cambia este valor según cuánto desees que el usuario haga scroll antes de que la barra se vuelva fija.
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}