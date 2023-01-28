import { Routes } from '@angular/router';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';

const ROUTES: Routes = [
  {path:'adoption', component: ListKittenComponent },
  {path:'abandon', component: CreateKittenComponent},
];

export { ROUTES };
