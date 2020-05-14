import { NgModule } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class IconsModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(faShoppingCart);
  }
}
