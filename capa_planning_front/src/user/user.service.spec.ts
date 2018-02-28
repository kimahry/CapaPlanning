import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { Apollo } from 'apollo-angular/Apollo';
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
