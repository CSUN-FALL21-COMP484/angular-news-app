import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  //Multiple API are listed in case the daily article limit is reached
  //api_key = 'a2ce595dbd9f4f98bbdc9f06d9dce4dc';
  //api_key = '177650c9866b42bb8a09b353d8689e9d';
  api_key = '3d844b9a333640cfb0393f14fda0470e';

  //unused key
  //api_key = '3b2e97de2d114258a2d24029bed26822';


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
