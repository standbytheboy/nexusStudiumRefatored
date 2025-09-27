import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.css']
})
export class UserProfileComponent {
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() avatarUrl: string = '';
}
