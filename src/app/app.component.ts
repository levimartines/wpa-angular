import {Component, OnInit} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {DataService} from "./data.service";
import {JokeModel} from "./joke.model";
import {ThemePalette} from "@angular/material/core";
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  joke: JokeModel;
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';

  constructor(updates: SwUpdate, private data: DataService) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    })
  }

  ngOnInit(): void {
    this.data.getRandomJoke().subscribe(res => this.joke = res);
  }

}
