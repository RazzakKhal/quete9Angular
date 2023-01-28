import { Component, Input } from '@angular/core';
import { Chaton } from '../models/chaton';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent {
@Input() mesChatons : Chaton [] | undefined
}
