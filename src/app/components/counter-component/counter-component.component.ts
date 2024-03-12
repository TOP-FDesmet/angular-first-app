import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  standalone: true,
  imports: [],
  templateUrl: './counter-component.component.html',
  styleUrl: './counter-component.component.css'
})
export class CounterComponentComponent {
    counter: number = 0;

    increment() {
        this.counter++;
    }

    decrement(){
        this.counter--;
    }
}
