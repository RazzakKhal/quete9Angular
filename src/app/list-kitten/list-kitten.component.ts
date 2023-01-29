import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chaton } from '../models/chaton';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {
userChatons : Chaton []= [];
currentChaton : Chaton = {
  name : '',
  race : '',
  date : new Date(),
  photo : '',
};
leschatonSuppression : Chaton [] | undefined= [];
detail = false;
afficheChaton : Chaton | undefined;

@Input() leschaton :Chaton [] | undefined;
@Output() userChatonEvent : EventEmitter<Chaton> = new EventEmitter()


envoiChaton(chaton : Chaton){
  this.currentChaton = chaton;

this.userChatonEvent.emit(this.currentChaton);

}

afficheDetail(chaton : Chaton){
  this.detail = true;
  this.afficheChaton = chaton;
}

cacheDetail(){
  this.detail = false;
  this.afficheChaton = undefined;
}
}
