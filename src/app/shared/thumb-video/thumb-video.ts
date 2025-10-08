import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ThumbVideo {
  image: string;
  title: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  minutesToRead: number;
}

@Component({
  selector: 'app-thumb-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thumb-video.html',
  styleUrls: ['./thumb-video.css']
})
export class ThumbVideos {
  @Input() video: ThumbVideo | null = null;
}