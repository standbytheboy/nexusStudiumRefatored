import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ContentItem {
  title: string;
  subtitle?: string;
  author: string;
  authorAvatar: string;
  authorRole?: string;
  image?: string;
  bgImage?: string;
  minutesToRead?: number;
  hitPercentage?: number;
  answerCount?: number;
}

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class ContentItemModule { }
