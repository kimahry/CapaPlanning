import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// Apps
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  user: User = new User;
  weekDays = [
    { id: 0, label: 'Monday', checked: false },
    { id: 1, label: 'Tuesday', checked: false },
    { id: 2, label: 'Wednesday', checked: false },
    { id: 3, label: 'Thursday', checked: false },
    { id: 4, label: 'Friday', checked: false },
    { id: 5, label: 'Saturday', checked: false },
    { id: 6, label: 'Sunday', checked: false }
  ];

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
