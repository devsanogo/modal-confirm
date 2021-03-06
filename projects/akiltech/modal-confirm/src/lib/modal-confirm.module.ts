/**
 * Akil library modules
 *
 * @author Anzoumana SANOGO <dev.sanogo@gmail.com>
 * License: MIT
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ComponentLoaderDirective } from './directives/component-loader/component-loader.directive';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';

@NgModule({
  declarations: [ModalConfirmComponent, ComponentLoaderDirective],
  imports: [CommonModule, MatDialogModule],
  exports: [ModalConfirmComponent],
  entryComponents: [ModalConfirmComponent]
})
export class ModalConfirmModule { }
