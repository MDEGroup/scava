import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { Project } from '../../project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  form: FormGroup;
  project: Project;

  constructor(
      private formBuilder: FormBuilder
  ) {
   }

  ngOnInit() {
      this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      git: this.formBuilder.array([]),
      svn: this.formBuilder.array([]),
      bugzilla: this.formBuilder.array([]),
      sourceforge: this.formBuilder.array([]),
      redmine: this.formBuilder.array([]),
      nntp: this.formBuilder.array([]),
    });
  }

  addInformationSource(source: string) {
    const control = <FormArray>this.form.get(source);
    switch (source) {
        case 'git':
            control.push(this.createGitRepository());
            break;
        case 'svn':
            control.push(this.createSVNRepository());
            break;
        case 'bugzilla':
            control.push(this.createBugzilla());
            break;
        case 'sourceforge':
            control.push(this.createSourceForgeIssues());
            break;
        case 'redmine':
            control.push(this.createRedmine());
            break;
        case 'nntp':
            control.push(this.createNNTP());
            break;
        default:
            break;
    }
  }

  createGitRepository() {
    return this.formBuilder.group({
      'url': ['']
    });
  }

  createSVNRepository() {
    return this.formBuilder.group({
      'url': ['']
    });
  }

  createBugzilla() {
    return this.formBuilder.group({
      'url': [''],
      'product': [''],
      'component': [''],
    });
  }

  createSourceForgeIssues() {
    return this.formBuilder.group({
      'url': ['']
    });
  }

  createRedmine() {
    return this.formBuilder.group({
      'url': [''],
      'name': [''],
      'project': [''],
    });
  }

  createNNTP() {
    return this.formBuilder.group({
      'url': ['']
    });
  }

  removeInformationSource(sourceName: string, index: number) {
      const control = <FormArray>this.form.get(sourceName);
      control.removeAt(index);
  }

  save() {
  }
}
