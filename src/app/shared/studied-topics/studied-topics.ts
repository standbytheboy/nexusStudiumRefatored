import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Topics {
  title: string,
  progress: string

}
@Component({
  selector: 'app-studied-topics',
  imports: [CommonModule],
  templateUrl: './studied-topics.html',
  styleUrl: './studied-topics.css'
})
export class StudiedTopics {
 @Input() topics: Topics[] = [];
}
