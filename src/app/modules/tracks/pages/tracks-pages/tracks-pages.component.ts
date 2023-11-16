import { Component } from '@angular/core';
import * as datosDeMusica from '../../../../data/tracks.json'
import { TrackModel } from 'src/app/core/models/tracks.model';

@Component({
  selector: 'app-tracks-pages',
  templateUrl: './tracks-pages.component.html',
  styleUrls: ['./tracks-pages.component.css']
})
export class TracksPagesComponent {
public dataTracksList: Array<TrackModel> = [

]
 
  constructor() {

  }

  ngOnInit(): void {   
  const {data}:any = (datosDeMusica as any).default
   this.dataTracksList = data
  }
}
