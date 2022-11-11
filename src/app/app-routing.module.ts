import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSegmentationComponent } from './page/customer-segmentation/customer-segmentation.component';
import { EnhancementComponent } from './page/enhancement/enhancement.component';
import { HomeComponent } from './page/home/home.component';
import { ImportantComponent } from './page/important/important.component';
import { ProcessComponent } from './page/process/process.component';
import { SupportComponent } from './page/support/support.component';
import { SegmentaionSupportComponent } from './page/segmentaion-support/segmentaion-support.component';
import { CustomerSupportComponent } from './page/customer-support/customer-support.component';
import { SchoolDistComponent } from './common/school-dist/school-dist.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "customer-segmentation",
  component: CustomerSegmentationComponent
}, {
  path: "important-of-segmentation",
  component: ImportantComponent
},
{
  path: "process",
  component: ProcessComponent
},
{
  path: "support",
  component: SupportComponent
},
{
  path: "enhancement",
  component: EnhancementComponent
},
{
  path: "segmentation-support",
  component: SegmentaionSupportComponent
},
{
  path: "school-contract",
  component: SchoolDistComponent
},
{
  path: "customer-support",
  component: CustomerSupportComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
