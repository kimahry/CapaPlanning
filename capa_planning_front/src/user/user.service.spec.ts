import { User } from './model/user';

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';

describe('Service: User', () => {

  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
    userService = new UserService();

    const usersExpected: User[] = [
      { firstName: 'Laurent', lastName: 'Meunier', email: 'lolo@test.com', password: '' },
      { firstName: 'Kévin', lastName: 'Monier', email: 'lolo@test.com', password: '' },
      { firstName: 'Jessica', lastName: 'Alba', email: 'lolo@test.com', password: '' },
      { firstName: 'Alex', lastName: 'Dupond', email: 'lolo@test.com', password: '' }
    ];
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
    let users: User[] = [];
    service.getUsers().subscribe(res => users = res);
    // expect(users).toBe(this.usersExpected);
  }));

});
