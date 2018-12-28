import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule
  ],
  exports:[
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedMaterialModule { }
