import { User } from './model/user';

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { Apollo } from 'apollo-angular/Apollo';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http/src/client';
import { GraphqlModuleModule } from '../graphql-module/graphql-module.module';

describe('Service: User', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GraphqlModuleModule],
      providers: [UserService, Apollo]
    });

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

  }));

});
