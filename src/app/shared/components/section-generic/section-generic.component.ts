import { Component, Input } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent {
  @Input()  title: string = '';
  @Input()  mode: 'small' | 'big' = 'big';
  @Input()  dataTracks:Array<TrackModel>=[]
  @Input()  prueba: string='';


  constructor(){

  }

ngOnInit(): void {

}
}
