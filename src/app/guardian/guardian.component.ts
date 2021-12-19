import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Component({
  selector: 'app-guardian',
  templateUrl: './guardian.component.html',
  styleUrls: ['./guardian.component.css']
})
export class GuardianComponent implements OnInit {

  articles;
    constructor(http: HttpClient){
    const path ='https://content.guardianapis.com/search?api-key=3522b891-fff1-49fd-aa30-00ce66892e67';
    this.articles = http.get<any>(path)
    .pipe(
        map(data => data.results)
    )
  }

  ngOnInit() {
  }

}