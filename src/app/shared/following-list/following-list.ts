import { Component, Input } from '@angular/core';

interface FollowedUser {
  name: string;
  role: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-following-list',
  imports: [],
  templateUrl: './following-list.html',
  styleUrl: './following-list.css'
})
export class FollowingList {
  @Input() followedUsers: FollowedUser[] = [];
}
