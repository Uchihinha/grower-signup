import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { TextInputComponent } from '../text-input/text-input.component';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss', '../text-input/text-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class SelectInputComponent extends TextInputComponent implements OnInit {

  @Input()
  options: Array<string>;

  @Input()
  multiple: boolean;

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
