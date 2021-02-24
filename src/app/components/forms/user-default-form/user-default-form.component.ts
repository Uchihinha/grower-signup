import { UserFormGroup, userMap } from './../../../factory/FormBuilderFactory';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Injector, Input } from '@angular/core';

@Component({
  selector: 'app-user-default-form',
  templateUrl: './user-default-form.component.html',
  styleUrls: ['./user-default-form.component.scss']
})
export class UserDefaultFormComponent implements OnInit {

  public genders: Array<string> = ['Male', 'Female', 'Others'];

  public locations: Array<string> = ['Toronto', 'Vancouver', 'Calgary', 'Ottawa'];

  public availableTypes: Array<string> = ['Grower', 'Warehouse'];

  @Input()
  public data;

  @Output()
  public cancelButtonClick: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public saveButtonClick: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  public userForm: FormGroup;

  constructor(private injector: Injector) { }

  ngOnInit() {
    this.updateFormBuilder();
  }

  cancel() {
    this.cancelButtonClick.emit();
  }

  getErrorMessage(field: string): string {
    if (this.userForm.controls[field].errors && this.userForm.controls[field].errors.required) {
      return 'This field is required';
    }

    return '';
  }

  save() {
    if (!this.userForm.valid) { return; }

    this.saveButtonClick.emit(this.userForm);
  }

  updateFormBuilder(type = '') {
    const param = this.data ? this.data.type : type;

    this.userForm = this.injector.get<UserFormGroup>(userMap.get(param)).getFormBuilder();

    if (this.data) {
      this.userForm.patchValue(this.data);
      this.userForm.controls.type.disable();
    }

    this.userForm.controls.type.valueChanges.subscribe(res => {
      this.updateFormBuilder(res);
    });
  }

}
