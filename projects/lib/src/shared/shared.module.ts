import 'jquery';
// Add back slick once carousel is actually used
// import 'slick-carousel';
// import 'slick-carousel/slick/slick.css';

import { CommonModule } from '@angular/common';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders,
} from '@angular/core';
import {
  NgbModalModule,
  NgbCollapseModule,
  NgbPaginationModule,
  NgbTabsetModule,
  NgbNavModule,
} from '@ng-bootstrap/ng-bootstrap';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NoResultsComponent } from './components/no-results/no-results.component';

@NgModule({
  declarations: [NoResultsComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    NgbPaginationModule,
    NgbCollapseModule,
    NgbModalModule,
    NgbNavModule,
    NgxSpinnerModule,
    CommonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    NgbPaginationModule,
    NgbCollapseModule,
    NgbModalModule,
    NgbNavModule,
    NgxSpinnerModule,
    NoResultsComponent,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CmsSharedModule {
  /**
   * forRoot lets us define providers as singletons so that there is exactly one instance
   * without this, there could be multiple instances of one service on lazy loaded modules :(
   */
  static forRoot(): ModuleWithProviders<CmsSharedModule> {
    return {
      ngModule: CmsSharedModule,
      providers: [],
    };
  }
}
