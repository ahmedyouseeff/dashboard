import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeedZeroPipe } from './pipes/need-zero.pipe';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [NeedZeroPipe],
  exports: [NeedZeroPipe, CarouselModule],
  imports: [CommonModule, CarouselModule],
})
export class SharedModule {}
