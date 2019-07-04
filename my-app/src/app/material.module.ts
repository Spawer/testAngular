import { NgModule } from '@angular/core';
import { MatListModule, MatCheckboxModule, MatSidenavModule } from '@angular/material';

/**
 * NgModule that includes all the Material modules used by the app.
 */
@NgModule({
  imports: [
    MatListModule,
    MatCheckboxModule,
    MatSidenavModule
  ],
  exports: [
    MatListModule,
    MatCheckboxModule,
    MatSidenavModule
  ]
})
export class MaterialModule {}