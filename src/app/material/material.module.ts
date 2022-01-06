import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list'

const MaterialComponents =[
  MatGridListModule
]

@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
