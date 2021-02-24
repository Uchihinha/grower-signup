import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { CreateUserModalComponent } from '../../dialogs/create-user-modal/create-user-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public userData$;

  constructor(private userSerivce: UserService, private dialog: MatDialog, private router: Router) {}

  visibleColumns = ['name', 'phone_number', 'type'];

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.userData$ = this.userSerivce.getUsers();
  }

  callCreateUserModal(): void {
    const dialogRef = this.dialog.open(CreateUserModalComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }

  getDetails(userId) {
    this.router.navigate([`/details/${userId}`]);
  }

}
