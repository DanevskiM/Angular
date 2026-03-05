import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  onAddTask(id: string){
    
  }
}
