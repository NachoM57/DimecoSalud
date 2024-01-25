import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Componentes/service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar: any = []



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

  menuValue: boolean = false;
  menu_icon: string = 'fa-solid fa-bars';
  openMenu() {
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  }
  closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'fa-solid fa-bars';
  }

  navigateTo(event: Event, elementId: string): void {
    event.preventDefault(); // Prevenir la navegación por defecto
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      // Cerrar el menú después de la navegación
      this.closeMenu();
    }
  }
}