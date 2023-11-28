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
      src: 'https://firebasestorage.googleapis.com/v0/b/dimecosalud-bellville.appspot.com/o/pagina%20principal%2FFachada%20edificio%20asistir%20e%20ingreso%20de%20DIMECO_1920x1280.webp?alt=media&token=35efbcd5-f459-4b88-9534-0e094a261372',
      alt: 'Edificio'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/dimecosalud-bellville.appspot.com/o/pagina%20principal%2FSala%20de%20recepci%C3%B3n_1920x1280.webp?alt=media&token=75b80459-07ad-47ec-adc2-349f70bf2c4c',
      alt: 'Sala de recepción 1'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/dimecosalud-bellville.appspot.com/o/pagina%20principal%2FSala%20de%20recepci%C3%B3n%201_1920x1280.webp?alt=media&token=cb8c2698-0917-438e-9232-9f831a2f5e6f',
      alt: 'Sala de recepción 2'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/dimecosalud-bellville.appspot.com/o/pagina%20principal%2FSala%20de%20recepci%C3%B3n%202_1920x1280.webp?alt=media&token=400bd911-8ded-44b7-8b56-532dbff2e875',
      alt: 'Sala de recepción 3'
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
      src: 'https://firebasestorage.googleapis.com/v0/b/dimecosalud-bellville.appspot.com/o/pagina%20principal%2FSala%20de%20ecografia%201_1920x1280.webp?alt=media&token=f80472f4-ff42-434b-831a-4fbf75be1c63',
      alt: 'Sala de ecografia 1'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/dimecosalud-bellville.appspot.com/o/pagina%20principal%2Fsala%20de%20ecografia%202_1920x1280.webp?alt=media&token=fcc57ff8-77c4-4a7c-8328-d9cee805c57f',
      alt: 'Sala de ecografia 2'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/dimecosalud-bellville.appspot.com/o/pagina%20principal%2FRadiografia_1920x1280.webp?alt=media&token=fea716a0-9785-4c4d-9048-ff1ade932028&_gl=1*zs3haw*_ga*MjU2MDY3OTk2LjE2OTc5MTUxNjc.*_ga_CW55HF8NVT*MTY5NzkxNTE2Ny4xLjEuMTY5NzkxNjMzNi4xNi4wLjA.',
      alt: 'Equipo de rayos X'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/dimecosalud-bellville.appspot.com/o/pagina%20principal%2FSala%20de%20Tomografia_1920x1280.webp?alt=media&token=28c15a69-d7f0-4d7d-aad2-dac26a48b433',
      alt: 'Tomografo'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/dimecosalud-bellville.appspot.com/o/pagina%20principal%2FEquipo%20de%20ecocardiografia_1920x1280.webp?alt=media&token=46e7330c-17e7-4b9e-be97-9240b7071205',
      alt: 'Equipo de ecocardiografia'
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/dimecosalud-bellville.appspot.com/o/pagina%20principal%2FSala%20Densitometria_1920x1280.webp?alt=media&token=58b348ac-1706-4a47-93cb-8a94e283bc49',
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