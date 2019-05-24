import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, AlertController } from '@ionic/angular';
// import { Subscription } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { Storage } from '@ionic/storage';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // currentMapTrack = null;
  // isTracking = false;
  // trackedRoute = [];
  // previousTracks = [];
  // positionSubscription: Subscription;

  constructor(
    public navCtrl: NavController,
    public geolocation: Geolocation) {
    const that = this;
    setTimeout(() => {
      that.GoogleMap();
      that.Geolocation();
    }, 2000);

  }
  // @ViewChild('map') mapElement: ElementRef;
  map: any;
  image: any;

  // ionViewDidLoad() {
  //   this.plt.ready().then(() => {
  //     this.loadHistoricRoutes();

  //     let mapOptions = {
  //       zoom: 13,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP,
  //       mapTypeControl: false,
  //       streetViewControl: false,
  //       fullscreenControl: false
  //     };

  //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  //     this.geolocation.getCurrentPosition().then((pos) => {
  //       let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
  //       this.map.setCenter(latLng);
  //       this.map.setZoom(15);
  //     }).catch(err => {
  //       console.log(err);
  //     });
  //   });
  // }

  // loadHistoricRoutes() {
  //   this.storage.get('routes').then(data => {
  //     if (data) {
  //       this.previousTracks = data;
  //     }
  //   })
  // }

  GoogleMap() {
    const beaches = [
      ['Faisal House', -7.968665, 112.669609],
      ['Fahmi House', -7.968665, 112.669775],
    ];
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 30,
      center: {lat: -7.968665, lng: 112.669609}
    });

    this.image = 'https://api.adorable.io/avatars/30/happy';

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < beaches.length; i++) {
      // tslint:disable-next-line:prefer-const
      let beachest = beaches[i];
      const beachMarker = new google.maps.Marker({
        position: {lat: beachest[1], lng: beachest[2]},
        map: this.map,
        icon: this.image,
        animation: google.maps.Animation.DROP,
        title: beachest[0]
      });
    }
  }

  Geolocation() {
    this.geolocation.getCurrentPosition().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
}
