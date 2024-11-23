import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() public ParentData : any


  @Output() public MyEvent = new EventEmitter();

  public SendMessage()
  {
    this.MyEvent.emit("Hello Parent...");
  }
}
