import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const COMPONENTS = [
  LoadingSpinnerComponent,
  ModalComponent

]


@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule  
  ],
  
  exports: [ LoadingSpinnerComponent,
             ModalComponent,
             FontAwesomeModule
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule { 

  constructor(library: FaIconLibrary) {
    library.addIcons(faCoffee); 
  }

}   
