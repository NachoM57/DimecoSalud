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
}