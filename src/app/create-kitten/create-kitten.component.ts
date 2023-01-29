import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chaton } from '../models/chaton';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {
myForm;
@Output() envoiFormulaire : EventEmitter<Chaton> = new EventEmitter();

  constructor(formBuilder : FormBuilder){
this.myForm = formBuilder.group({
  nom : ['', Validators.required],
  race : ['', Validators.required],
  photo : ['', Validators.required],
  date : [null, Validators.required],
});
  }

  onSubmit(){
if(this.myForm.valid){
this.envoiFormulaire.emit(new Chaton(this.myForm.controls.nom.value, this.myForm.controls.race.value, this.myForm.controls.date.value, this.myForm.controls.photo.value ));
console.log(new Chaton(this.myForm.controls.nom.value, this.myForm.controls.race.value, this.myForm.controls.date.value, this.myForm.controls.photo.value ))
}
  }

}
