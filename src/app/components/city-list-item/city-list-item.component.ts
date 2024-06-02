import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-city-list-item',
  standalone: true,
  imports: [],
  templateUrl: './city-list-item.component.html',
  styleUrl: './city-list-item.component.scss'
})
export class CityListItemComponent {

  @Input() cityInput: any;
  @Output() remove = new EventEmitter<void>();

removeComponent(){
  this.remove.emit();
}

}
