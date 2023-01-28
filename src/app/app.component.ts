import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Chaton } from './models/chaton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quete9Angular';
  mesChatons : Chaton [] = [];
  myForm : FormGroup | undefined;
userChatonsArray : Chaton [] = [];
currentChaton : Chaton ={
  name:'',
  race:'',
  date:new Date(),
  photo:''
};

  traitementForm(form : FormGroup){
console.log(form)
  }

  recupChaton(value : Chaton){
this.mesChatons.push(value);

// this.mesChatons = this.mesChatons?.filter((chat) => chat.name !== this.currentChaton.name || chat.race !== this.currentChaton.race || chat.date !== this.currentChaton.date || chat.photo !== this.currentChaton.photo );
  }

  adoptedChaton(nouveauChaton : Chaton){
    this.currentChaton = nouveauChaton;
    this.userChatonsArray.push(this.currentChaton);
this.mesChatons = this.mesChatons.filter((chaton) => chaton.name !== this.currentChaton.name || chaton.date !== this.currentChaton.date ||chaton.photo !== this.currentChaton.photo ||chaton.race !== this.currentChaton.race);

}


}
