import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface UserComment {
  date: string;
  userName: string;
  type: string;
}

@Component({
  selector: 'app-user-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-comment.html',
  styleUrls: ['./user-comment.css']
})

export class UserCommentComponent {
  @Input() comment: UserComment | null = null;
}