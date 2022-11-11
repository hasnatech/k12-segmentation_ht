import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { MenuComponent } from './common/menu/menu.component';
import { HomeComponent } from './page/home/home.component';
import { CustomerSegmentationComponent } from './page/customer-segmentation/customer-segmentation.component';
import { ImportantComponent } from './page/important/important.component';
import { ProcessComponent } from './page/process/process.component';
import { SupportComponent } from './page/support/support.component';
import { EnhancementComponent } from './page/enhancement/enhancement.component';
import { SegmentaionSupportComponent } from './page/segmentaion-support/segmentaion-support.component';
import { SchoolDistComponent } from './common/school-dist/school-dist.component';
import { CustomerSupportComponent } from './page/customer-support/customer-support.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CustomerSegmentationComponent,
    ImportantComponent,
    ProcessComponent,
    SupportComponent,
    EnhancementComponent,
    SegmentaionSupportComponent,
    SchoolDistComponent,
    CustomerSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
