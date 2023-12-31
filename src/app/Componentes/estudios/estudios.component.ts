import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Componentes/service/data.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  servicios: any = [];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Esto es para almacenar en la variable de instancia los datos recuperados por el servicio
    this.dataService.getDatos().subscribe(data => {
      this.servicios = data.servicios;
    });


  }


  transformToHtmlBreaks(text: string): string {
    return text.replace(/\n\n/g, '<br>');
  }
}
