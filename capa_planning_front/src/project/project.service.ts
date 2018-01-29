import { Injectable } from '@angular/core';
import { Project } from './model/project';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProjectService {

  private projects: Project[] = [{ name: 'Ville de Paris' }, { name: 'CCSP' }, { name: 'LBP' }];

  constructor() { }

  getProjects() {
    return of(this.projects);
  }

}
