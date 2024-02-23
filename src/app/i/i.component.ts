import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-i',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './i.component.html',
  styleUrl: './i.component.css'
})
export class IComponent {
  @Input() control = new FormControl();
  @Input() label!: string;
  @Input() name!: string;
  @Input() unit!: string;
  @Input() selectedUnit!: string;
  @Input() min!: string;
  @Input() max!: string;
}
