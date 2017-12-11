import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/Operator/map';
import {Router} from '@angular/router';
const swal = require('sweetalert');

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {


users:Array<any>;
usersDataRef:AngularFireList<any>;
userObservable:Observable<any>;
  constructor(public af: AngularFireDatabase, public router: Router ) {
  	this.usersDataRef = af.list('/users');
    this.userObservable = this.usersDataRef.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });
  	this.userObservable.subscribe((res)=>{
  		this.users = res;
  	})
   }

    usersShow(key){
     this.router.navigate(['/users/viewUser', key]);
  }

   usersDelete(key:any){
    swal({
            title: '¿Está seguro?',
            text: 'No podrá recuperar esta información',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Si',
            cancelButtonText: 'Cancelar',
            closeOnConfirm: false,
            closeOnCancel: false
        }, (isConfirm) => {
            if (isConfirm) {
               this.usersDataRef.remove(key).then((res)=>{
                   swal('Registro Eliminado','Usuario eliminado correctamente!', 'success');
                 })
              } else {
                swal('Anulado', 'El usuario no ha sido eliminado!', 'error');
            }
        });
  }

}
