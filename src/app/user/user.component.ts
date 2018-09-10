import { Component, OnInit } from '@angular/core';
import {User} from './user.model';
import {ActivatedRoute} from '@angular/router';
import {UserService} from './user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataModel} from '../shared/data.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  userForm: FormGroup;

  user: User = new User();

  usersModel: DataModel[];

  constructor(public userService: UserService,
              private fb: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.users = this.route.snapshot.data.users;
    this.userForm = this.fb.group({
      username: ['', Validators.required]
    });

    this.usersModel = [
      new DataModel('id', 'ID', 'number', true, []),
      new DataModel('username', 'Nom d\'utilisateur', 'string', false, []),
      new DataModel('enable', 'Actif', 'number', true, [])
    ];
  }
}
