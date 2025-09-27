import { Component, Input } from '@angular/core';

interface Topics {

}

@Component({
  selector: 'app-studied-topics',
  imports: [],
  templateUrl: './studied-topics.html',
  styleUrl: './studied-topics.css'
})
export class StudiedTopics {
 @Input() topics: Topics[] = [];
}
