import { Component } from '@angular/core';
import { CityFormComponent } from '../../components/city-form/city-form.component';
import { CityListItemComponent } from '../../components/city-list-item/city-list-item.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-app',
  standalone: true,
  imports: [CityFormComponent,CityListItemComponent,NavbarComponent,NgFor],
  templateUrl: './list-app.component.html',
  styleUrl: './list-app.component.scss'
})


export class ListAppComponent {




  removePlace(index:number) {
    this.places.splice(index, 1);
    }

  places: any[] = []

  addPlace(city: any) {

    this.places.push(city)
  }




}
