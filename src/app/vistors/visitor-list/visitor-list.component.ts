import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import{User} from '../../user';
import {UserService} from '../../user.service';
@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
   // Important objects
 MyDataSource: any;
 UserList: User[];
 displayedColumns: string[] = ['firstName', 'lastName', 'email', 'userName', 'role','Update','Delete'];
  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  } 

   // To Get List Of User
 getUsers() {
  this.service
  .getUsers()
  .subscribe((data: User[]) => {
  this.MyDataSource = new MatTableDataSource<User>();
  this.MyDataSource.data = data as User[];
  this.MyDataSource.paginator = this.paginator;
 this.MyDataSource.sort = this.sort;
  });
  }
  
  // To Edit User
  editUser(usrid) {
  this.router.navigate([`/visitore/${usrid}`]);
  }
  
  // Search specific result

public doFilter = (value: string) => {
    this.MyDataSource.filter = value.trim().toLocaleLowerCase();
  }
// Delete User
deleteUser(usrid) {
  this.service.deleteUser(usrid).subscribe(() => {
  this.getUsers();
  });
  }


}
