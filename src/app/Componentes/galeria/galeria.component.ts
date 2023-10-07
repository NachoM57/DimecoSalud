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
