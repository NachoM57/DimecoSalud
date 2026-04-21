import { Component, VERSION, ViewEncapsulation } from "@angular/core";
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';



@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GaleriaComponent {
  images = [
    {
      src: 'assets/images/instalaciones/edificio.JPG',
      alt: 'Edificio'
    },
    {
      src: 'assets/images/instalaciones/sala1.JPG',
      alt: 'Sala de recepción 1'
    },
    {
      src: 'assets/images/instalaciones/sala2.JPG',
      alt: 'Sala de recepción 2'
    },
    {
      src: 'assets/images/instalaciones/sala3.JPG',
      alt: 'Sala de recepción 3'
    },
    {
      src: 'assets/images/instalaciones/mamografia1.jpg',
      alt: 'Mamógrafo 1'
    },
    {
      src: 'assets/images/instalaciones/mamografia2.jpg',
      alt: 'Mamógrafo 2'
    },
    {
      src: 'assets/images/instalaciones/salaecografia1.JPG',
      alt: 'Sala de ecografia 1'
    },
    {
      src: 'assets/images/instalaciones/salaecografia2.JPG',
      alt: 'Sala de ecografia 2'
    },
    {
      src: 'assets/images/instalaciones/rayosx.jpg',
      alt: 'Equipo de rayos X'
    },
    {
      src: 'assets/images/instalaciones/tomografo.JPG',
      alt: 'Tomografo'
    },
    {
      src: 'assets/images/instalaciones/ecografia1.png',
      alt: 'Equipo de ecocardiografia'
    },
    {
      src: 'assets/images/instalaciones/densitometria.png',
      alt: 'Sala de Densitometria'
    }
  ];


  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom],
    download: false,
    controls: true,
    showCloseIcon: true,

  };

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}