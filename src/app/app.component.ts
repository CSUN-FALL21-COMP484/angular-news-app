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
  californiaArticles:Array<any>;
  mArticles:Array<any>;
  mSources:Array<any>;
  searchedArticles:Array<any>;
  articlesBySource:Array<any>;

  isSearchShown: boolean = false;
  areArticlesShown: boolean = true;
  searchTerm: string;
  sourceName: any;
  isListBySourceShown: boolean = false;

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
     //load california articles
     this.newsapi.getCaliforniaArticles().subscribe(data=> this.californiaArticles = data['articles']);
    }

  searchArticles(source: string | String){
    this.areArticlesShown = false;
    this.sourceName = source
    console.log("selected source is: "+ source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.articlesBySource = data['articles']);
    this.isListBySourceShown = true;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this['dataSource'].filter = filterValue;
  }
  userSearch(userQuery: string){
    this.searchTerm = userQuery
    this.areArticlesShown = false;
    this.newsapi.searchArticles(userQuery).subscribe(data => this.searchedArticles = data['articles']);
    this.isSearchShown = true
    
  }
  goHome(){
    this.isSearchShown = false;
    this.isListBySourceShown = false;
    this.areArticlesShown = true;
  }
 

}