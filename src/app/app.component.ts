///<reference path="app.component.d.ts" />
import { Component } from '@angular/core';
//import { Angulartics2GoogleAnalytics } from 'angulartics2';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'app works!';


  AppComponent(){
    this.initGoogleAnalytics();
  } 

  initGoogleAnalytics(){



  }
}
