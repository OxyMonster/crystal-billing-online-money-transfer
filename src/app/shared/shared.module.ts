import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';


const COMPONENTS = [
  LoadingSpinnerComponent,
  ModalComponent

]


@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: COMPONENTS
})
export class SharedModule { }
