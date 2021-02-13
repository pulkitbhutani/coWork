import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-workspaces',
  templateUrl: './workspaces.page.html',
  styleUrls: ['./workspaces.page.scss'],
})
export class WorkspacesPage implements OnInit {
  public workSpaces = [];

  constructor(private afDB: AngularFireDatabase) { }

  ngOnInit() {
    this.getWorkSpaces().valueChanges().subscribe(
      (result: any) => {
        this.workSpaces = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getWorkSpaces() {
    return this.afDB.list('workspaces');
  }

}
