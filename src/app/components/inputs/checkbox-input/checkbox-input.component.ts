import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TextInputComponent } from '../text-input/text-input.component';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class CheckboxInputComponent extends TextInputComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
