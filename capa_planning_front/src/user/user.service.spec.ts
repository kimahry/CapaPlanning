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
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

});
