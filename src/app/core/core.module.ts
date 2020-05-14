import { NgModule, Optional, SkipSelf } from '@angular/core';
import { IconsModule } from './icons.module';

@NgModule({
  declarations: [],
  imports: [
    IconsModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
