import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Componentes/service/data.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  presentacion: any = []


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.dataService.getDatos().subscribe(data => {
      //definir informacion a mostrar;
      this.presentacion = data.presentacion;
      this.presentacion = data.presentacion;
    })

  }


  transformToHtmlBreaks(text: string): string {
    // Primero, reemplaza los saltos de línea con <br>
    let formattedText = text.replace(/\n\n/g, '<br>');

    // Luego, utiliza una expresión regular para encontrar y envolver en <strong>
    // la parte del texto que quieres en negrita.
    formattedText = formattedText.replace(/(Somos una institución de salud dedicada al diagnóstico por imágenes.)/, '<strong>$1</strong>');

    return formattedText;
  }

}