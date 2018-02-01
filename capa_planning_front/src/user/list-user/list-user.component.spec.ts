import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from '../../shared/shared.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListUserComponent } from './list-user.component';
import { UserService } from '../user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { GraphqlModuleModule } from '../../graphql-module/graphql-module.module';

describe('ListUserComponent', () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, SharedModule, RouterTestingModule, GraphqlModuleModule],
      declarations: [ListUserComponent],
      providers: [UserService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // UserService actually injected into the component
    // const userService = fixture.debugElement.injector.get(UserService);
    // Setup spy on the `getQuote` method
    // spyOn(userService, 'getUsers').and.returnValue(Promise.resolve(getUsers));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
