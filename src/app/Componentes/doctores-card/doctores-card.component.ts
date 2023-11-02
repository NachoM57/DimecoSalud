import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Componentes/service/data.service';

@Component({
  selector: 'app-doctores-card',
  templateUrl: './doctores-card.component.html',
  styleUrls: ['./doctores-card.component.css']
})
export class DoctoresCardComponent implements OnInit {
  doctores: any = []

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.dataService.getDatos().subscribe(data => {
      //definir informacion a mostrar;
      this.doctores = data.doctores;
      this.doctores = data.doctores;
    })
  }

  transformToHtmlBreaks(text: string): string {
    return '<strong>' + text.replace(/\n\n/g, '<br>') + '</strong>';
  }


}
