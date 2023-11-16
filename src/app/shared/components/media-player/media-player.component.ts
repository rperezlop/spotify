import { Component } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {

   mockCover: TrackModel = {
    cover: 'https://cdn.pixabay.com/audio/2022/08/02/19-23-38-897_200x200.jpg',
    album: 'La dinastia',
    name: 'Todo por ti',
    url: '#',
    _id: 1
  }
  constructor() { }

  ngOninit(): void {

  }

}
