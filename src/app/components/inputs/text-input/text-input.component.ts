import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class TextInputComponent implements OnInit {

  @Input()
  public errorMessage: string;

  @Input()
  public label: string;

  @Input()
  public placeholder: string;

  @Input()
  public controlName: string;

  @Input()
  public mask: string;

  @Input()
  public specialCharacters: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
