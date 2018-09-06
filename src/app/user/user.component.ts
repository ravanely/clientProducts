import { Component, OnInit } from '@angular/core';
import {User} from './user.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.route.snapshot.data.users;
  }

}
