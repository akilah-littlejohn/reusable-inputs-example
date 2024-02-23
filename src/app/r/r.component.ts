import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-r',
  standalone: true,
  imports: [],
  templateUrl: './r.component.html',
  styleUrl: './r.component.css'
})
export class RComponent {
  @Input()name!: string;  
  @Input()label!: string; 
  @Input() selectedUnit!: string;
}
