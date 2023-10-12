import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Componentes/service/data.service';

@Component({
  selector: 'app-doctores-card',
  templateUrl: './doctores-card.component.html',
  styleUrls: ['./doctores-card.component.css']
})
export class DoctoresCardComponent implements OnInit {
  doctores: any = []
  showScrollToTopButton = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.dataService.getDatos().subscribe(data => {
      //definir informacion a mostrar;
      this.doctores = data.doctores;
      this.doctores = data.doctores;
    })

    window.addEventListener('scroll', this.checkScroll);
  }


  ngOnDestroy() {
    // Es importante remover el listener cuando el componente ya no está en uso.
    window.removeEventListener('scroll', this.checkScroll);
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


  transformToHtmlBreaks(text: string): string {
    return '<strong>' + text.replace(/\n\n/g, '<br>') + '</strong>';
  }


}
