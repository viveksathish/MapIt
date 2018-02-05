import { Component } from '@angular/core';
import {MarkerService} from './services/marker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zoom: number = 10;

  lat: number = 12.9075441;
  lng: number = 77.6295598;

  markerName:string;
  markerLat:string;
  markerLng:string;
  markerDraggable:string;

  markers: marker[];

  constructor(private _markerservice: MarkerService) {
    this.markers = this._markerservice.getMarkers();
  }

  clickedMarker(marker:marker, index:number) {
    console.log('Clicked Marker: '+marker.name+' at index '+index);
  }

  mapClicked($event:any){
    console.log('Map Clicked');
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable:false
    }
    
    this.markers.push(newMarker);
  }

  markerDragEnd(marker:any, $event:any){
    console.log('dragEnd', marker, $event);
    
    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable:false
    }
    
    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
        
    this._markerservice.updateMarker(updMarker, newLat, newLng);
  }

  addMarker(){
    console.log('Adding Marker');
    if(this.markerDraggable == 'yes'){
      var isDraggable = true;
    } else {
      var isDraggable = false;
    }
    
    var newMarker = {
      name:this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable:isDraggable
    }
    
    this.markers.push(newMarker);
    this._markerservice.addMarker(newMarker); 
  }

  removeMarker(marker){
    console.log('Removing Marker...');
    for(var i = 0;i < this.markers.length;i++){
      if(marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng){
        this.markers.splice(i, 1);
      }
    }
    
    this._markerservice.removeMarker(marker);

    
  }

}
 
  

interface marker{
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
