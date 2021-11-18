import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report/report.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ReportComponent
  ],
  exports: [
    ReportComponent
  ],
})
export class DatacreditLibModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: DatacreditLibModule,
      providers: []
    }
  }
}
