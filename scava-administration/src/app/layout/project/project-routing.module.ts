import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ImportProjectComponent } from './components/import-project/import-project.component';
import { AddProjectComponent } from './components/add-project/add-project.component';

const routes: Routes = [
    {
        path: '', component: ProjectComponent,
    },
    {
        path: 'add', component: AddProjectComponent
    },
    {
        path: 'import', component: ImportProjectComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
