import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Componentes/service/data.service';

@Component({
  selector: 'app-rediccionar',
  templateUrl: './rediccionar.component.html',
  styleUrls: ['./rediccionar.component.css']
})
export class RediccionarComponent implements OnInit {
  redireccion: any = []


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.dataService.getDatos().subscribe(data => {
      //definir informacion a mostrar;
      this.redireccion = data.redireccion;
      this.redireccion = data.redireccion;
    })

  }
}
