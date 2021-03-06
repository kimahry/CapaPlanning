import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../shared/shared.module';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateProjectComponent } from './create-project.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateProjectComponent', () => {
  let component: CreateProjectComponent;
  let fixture: ComponentFixture<CreateProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, SharedModule, RouterTestingModule],
      declarations: [CreateProjectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
