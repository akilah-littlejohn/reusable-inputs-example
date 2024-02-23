import { Component, OnInit } from '@angular/core';
import { IComponent } from '../i/i.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RComponent } from '../r/r.component';


@Component({
  selector: 'app-app',
  standalone: true,
  imports: [IComponent,RComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements 
OnInit {

  selectedUnit!: string;
  bmiResult!: string;
  
metricFormGroup = new FormGroup({
  cm: new FormControl (['']),
  kg:  new FormControl (['']),
})

imperialFormGroup = new FormGroup({
  ft:  new FormControl (['']),
  in:  new FormControl (['']),
  st:  new FormControl (['']),
  lbs:  new FormControl ([''])
})
ngOnInit(){
  console.log(this.metricFormGroup.controls.cm.value)

}

}
