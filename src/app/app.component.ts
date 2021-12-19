import { Component, Input } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  [x: string]: any;
  title = 'news-app';
  

  healthArticles:Array<any>;
  techArticles:Array<any>;
  entertainmentArticles:Array<any>;
  mArticles:Array<any>;
  mSources:Array<any>;

  

  constructor(private newsapi:NewsApiService){
    console.log('app component constructor called');         
  }

  ngOnInit() {

    //load articles
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);  
    //load health articles
    this.newsapi.getHealthArticles().subscribe(data=> this.healthArticles = data['articles']); 
    //load tech articles
    this.newsapi.getTechnologyArticles().subscribe(data=> this.techArticles = data['articles']); 
    //load entertianmeent articles
    this.newsapi.getEntertainmentArticles().subscribe(data=> this.entertainmentArticles = data['articles']);
    }

  searchArticles(source: string | String){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this['dataSource'].filter = filterValue;
  }
  userSearch(userQuery: string){
  
    this.newsapi.searchArticles(userQuery).subscribe(data => this.mArticles = data['articles']);
    
  }

 

}