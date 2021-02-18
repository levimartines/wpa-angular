import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JokeModel} from "./joke.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getRandomJoke() {
    return this.http.get<JokeModel>('https://api.chucknorris.io/jokes/random');
  }
}
