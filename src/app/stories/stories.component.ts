import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  stories;
    constructor(http: HttpClient){
    const path ='https://api.nytimes.com/svc/topstories/v2/world.json?api-key=gcaAoRAMvD4XDGkriy9Hdsiz60mzhscn';

    this.stories = http.get<any>(path)
    .pipe(
        map(data => data.results)
    )
  }

  ngOnInit() {
  }

}
