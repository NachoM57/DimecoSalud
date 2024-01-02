import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Componentes/service/data.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias: any = []

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.dataService.getDatos().subscribe(data => {
      //definir informacion a mostrar;
      this.noticias = data.noticias;
      this.noticias = data.noticias;
    })
  }




  transformToHtmlBreaks(text: string): string {
    // Primero, reemplaza los saltos de línea con <br>
    let formattedText = text.replace(/\n\n/g, '<br>');

    // Luego, utiliza una expresión regular para encontrar y envolver en <strong>
    // la parte del texto que quieres en negrita.
    formattedText = formattedText.replace(/(Dimeco Salud, Profesionalismo y compromiso al servicio del diagnóstico.)/, '<strong>$1</strong>');

    return formattedText;
  }

}
