import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  //Multiple API are listed in case the daily article limit is reached 28d7743ed52d4321bb77c8739e4129d6
  api_key = 'a2ce595dbd9f4f98bbdc9f06d9dce4dc';
 

  constructor(private http:HttpClient) { }
  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }
  initArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey='+this.api_key);
   
  }
  getArticlesByID(source: String){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
  
  searchArticles(query: String){
    return this.http.get('https://newsapi.org/v2/everything?q=' + query + '&apiKey='+ this.api_key);
  }

  getHealthArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey='+ this.api_key);
  }

  getTechnologyArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey='+ this.api_key);
  }
  getEntertainmentArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey='+ this.api_key);
  }

  getCaliforniaArticles(){
    return this.http.get('https://newsapi.org/v2/everything?q=California&apiKey='+ this.api_key);
  }
} 
