import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../service/photos.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  constructor(private photoService: PhotosService) { }

  ngOnInit(): void {
    this.photoService.getApi().subscribe((data: any)  => {console.log(data.json())})
  }

}
