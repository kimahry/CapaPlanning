import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// Apps
import { User } from '../models/user';
import { UserService } from '../user.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  user: User = new User;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.paramMap.switchMap(
      (params: ParamMap) =>
        this.userService.getUserByID(params.get('id'))
    ).subscribe(res => {
      this.user = res.getUser;
    });
  }

}
