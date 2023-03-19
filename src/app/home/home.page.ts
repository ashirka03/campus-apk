import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { App } from '@capacitor/app';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private browser: InAppBrowser) {}

  ngOnInit(): void {
    const browserInstance = this.browser.create(
      'https://campus.vivanlosjovenes.edu.gt', 
      '_self',
      'location=no, hidenavigationbuttons=true,hideurlbar=truw.zoom=no'
    );

    browserInstance.on('loadstop').subscribe((evt) => {
      SplashScreen.hide();
    });
    
    browserInstance.on('loaderror').subscribe((evt) => {
      SplashScreen.hide();
    });


    browserInstance.on('exit').subscribe((evt) => {
      App.exitApp();
    });
  }
}