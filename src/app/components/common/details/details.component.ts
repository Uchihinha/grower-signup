import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ConfirmDeleteComponent } from '../../dialogs/confirm-delete/confirm-delete.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public faTrash = faTrash;

  public isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  public id: number;
  public user: object;

  ngOnInit() {
    this.route.params.subscribe(route => {
      this.id = route.id;

      this.getUser();
    });
  }

  getUser() {
    this.userService.find(this.id).subscribe(res => {
      this.user = res;
      this.isLoading = false;
    }, err => {
      this.isLoading = false;
    });
  }

  back() {
    this.router.navigate(['/']);
  }

  save(data) {
    this.userService.update(this.id, data.value).then(res => {
      this.router.navigate([`/`]);
    }).catch(err => {
      console.error('An error ocourred', err);
    });
  }

  openSnackBar(message: string, action: string, type: string = 'success') {
    this.snackBar.open(message, action, {
      duration: 300000,
      panelClass: type
    });
  }

  delete() {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '500px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) { return; }

      this.userService.delete(this.id).subscribe(() => {
        this.openSnackBar('User deleted with success!', 'Nice');
        this.router.navigate([`/`]);
      }, err => {
        this.openSnackBar('Oops!', 'Ok', 'error');
        console.error('Oops! => ', err);
      });
    });

  }

}
