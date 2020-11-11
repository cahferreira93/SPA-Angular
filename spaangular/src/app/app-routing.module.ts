import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { HomeComponent } from './home/home.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  //Home
  {
    path: '',
    component: HomeComponent
  },
  //Aluno
  {
    path: 'alunos',
    component: AlunosComponent
  },
  //Professor
  {
    path: 'professores',
    component: ProfessoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
