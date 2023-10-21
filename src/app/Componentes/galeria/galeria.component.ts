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
      src: 'https://firebasestorage.googleapis.com/v0/b/dimecosalud-bellville.appspot.com/o/pagina%20principal%2FEcografia_1920x1280.webp?alt=media&token=981c85e6-0122-4d97-81e3-0b219183c7a8&_gl=1*1gzt5r3*_ga*MjU2MDY3OTk2LjE2OTc5MTUxNjc.*_ga_CW55HF8NVT*MTY5NzkxNTE2Ny4xLjEuMTY5NzkxNjI5Mi42MC4wLjA.',
      alt: 'Ecografo'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/dimecosalud-bellville.appspot.com/o/pagina%20principal%2FRadiografia_1920x1280.webp?alt=media&token=fea716a0-9785-4c4d-9048-ff1ade932028&_gl=1*zs3haw*_ga*MjU2MDY3OTk2LjE2OTc5MTUxNjc.*_ga_CW55HF8NVT*MTY5NzkxNTE2Ny4xLjEuMTY5NzkxNjMzNi4xNi4wLjA.',
      alt: 'Equipo de rayos X'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/dimecosalud-bellville.appspot.com/o/pagina%20principal%2FTomografo_1920x1280.webp?alt=media&token=15fce65f-a73d-4923-a130-e0520767b880&_gl=1*1f5j0m5*_ga*MjU2MDY3OTk2LjE2OTc5MTUxNjc.*_ga_CW55HF8NVT*MTY5NzkxNTE2Ny4xLjEuMTY5NzkxNjM3Ni42MC4wLjA.',
      alt: 'Tomografo'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/dimecosalud-bellville.appspot.com/o/pagina%20principal%2FAparato1_1920x1280.webp?alt=media&token=08353ec6-bc99-4056-a748-25a1c3602b3e&_gl=1*1pdtnf4*_ga*MjU2MDY3OTk2LjE2OTc5MTUxNjc.*_ga_CW55HF8NVT*MTY5NzkxNTE2Ny4xLjEuMTY5NzkxNjg2My41NS4wLjA.',
      alt: 'Mamógrafo 1'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/dimecosalud-bellville.appspot.com/o/pagina%20principal%2FAparato2_1920x1280.webp?alt=media&token=f7bb7b75-e273-40f5-bf78-cdd4c5d8650a&_gl=1*940l57*_ga*MjU2MDY3OTk2LjE2OTc5MTUxNjc.*_ga_CW55HF8NVT*MTY5NzkxNTE2Ny4xLjEuMTY5NzkxNjkwMC4xOC4wLjA.',
      alt: 'Mamógrafo 2'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/dimecosalud-bellville.appspot.com/o/pagina%20principal%2FPrimerPiso_1920x1280.webp?alt=media&token=a2b3afa3-39ce-4a59-8308-2db8c61ff435&_gl=1*14ca6ff*_ga*MjU2MDY3OTk2LjE2OTc5MTUxNjc.*_ga_CW55HF8NVT*MTY5NzkxNTE2Ny4xLjEuMTY5NzkxNjkyOS42MC4wLjA.',
      alt: 'Sala de espera'
    }
  ];


  
  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom],
    download: false
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}
