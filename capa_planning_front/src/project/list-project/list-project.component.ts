import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Project } from '../model/project';
import { ProjectService } from '../project.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit, AfterViewInit {

  projects: Project[] = [];
  displayedColumns = ['name', 'actions'];
  dataSource: MatTableDataSource<Project> = new MatTableDataSource<Project>();

  constructor(private projectService: ProjectService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe(projects => this.dataSource.data = projects);
  }

  deleteProject(project: Project) {
    console.log('Supprimer le project');
  }

}
