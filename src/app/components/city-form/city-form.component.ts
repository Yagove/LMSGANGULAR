import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-city-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './city-form.component.html',
  styleUrl: './city-form.component.scss'
})
export class CityFormComponent {


  myForm = this.fb.group({
    cityName:["", [Validators.required]],
    country:["", [Validators.required]],
    month:["", [Validators.required]]
  })

  @Output() city = new EventEmitter<any>();

  constructor(private fb: FormBuilder){
    
  }
  
  sendForm() {
    console.log("funcionaa", this.myForm.value)
    //validaciones

    this.city.emit(this.myForm.value)

  }

}
