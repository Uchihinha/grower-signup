import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFormGroup {
  constructor() { }

  public getFormBuilder(): FormGroup {
    return (new FormBuilder()).group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone_number: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class Grower extends UserFormGroup {
  constructor() {
    super();
  }

  public getFormBuilder(): FormGroup {
    return (new FormBuilder()).group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone_number: ['', Validators.required],
      gender: ['', Validators.required],
      batchs_handled: ['', Validators.required],
      yield_acquired: ['', Validators.required],
      greenhouse_locations: ['', Validators.required],
      type: ['Grower', Validators.required],
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class Warehouse extends UserFormGroup {
  constructor() {
    super();
  }

  public getFormBuilder(): FormGroup {
    return (new FormBuilder()).group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone_number: ['', Validators.required],
      gender: ['', Validators.required],
      years_experience: ['', Validators.required],
      education_qualification: ['', Validators.required],
      inventory_management_certification: [false],
      type: ['Warehouse', Validators.required],
    });
  }
}

export const userMap = new Map([
  ['Grower', Grower],
  ['Warehouse', Warehouse],
  ['', UserFormGroup]
]);

export class FactoryModule {}
