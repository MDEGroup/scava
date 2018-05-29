import { Component, OnInit } from '@angular/core';
import { Project } from '../../project.model';

@Component({
  selector: 'app-import-project',
  templateUrl: './import-project.component.html',
  styleUrls: ['./import-project.component.scss']
})
export class ImportProjectComponent implements OnInit {

  project: Project;

  constructor() { }

  ngOnInit() {
  }

  save() {
  }

}
