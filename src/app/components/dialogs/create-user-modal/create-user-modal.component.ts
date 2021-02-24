import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.scss']
})
export class CreateUserModalComponent implements OnInit {

  availableTypes: string[] = ['Grower', 'Warehouse'];

  selectedType: string;

  constructor(private userService: UserService, public dialogRef: MatDialogRef<CreateUserModalComponent>, private router: Router) { }

  ngOnInit() {
  }

  changeType(e) {
    this.selectedType = e.value;
  }

  closeModal() {
    this.dialogRef.close();
  }

  save(form: FormGroup) {
    this.userService.create(form.value).then(res => {
      this.closeModal();
      this.router.navigate([`/details/${res.id}`]);
    }).catch(err => {
      console.error('An error ocourred', err);
    });
  }

}
