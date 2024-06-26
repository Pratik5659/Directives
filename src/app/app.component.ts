import { Component } from '@angular/core';
import { Task } from './app,model';
import { taskAnimations } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations:taskAnimations
})
export class AppComponent {
  title = 'Directives & Data Binding in Angular';

  tasks: Task[] = [];
  newTaskTitle: string = '';

  addTask(){
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskTitle,
        completed: false
      };
      this.tasks.push(newTask);
      this.newTaskTitle = '';
    }
  }
  toggleTaskCompletion(task:Task){
    task.completed = !task.completed;
  }
  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
