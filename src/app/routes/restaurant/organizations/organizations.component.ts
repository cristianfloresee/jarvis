import { Component, OnInit } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/Operator/map';

import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
const swal = require('sweetalert');




@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  public siteVal: any;
  public categories: any[] = [];
  public catRef: AngularFireList<any>;
  public categoryData: Observable<any>;

  public institucionesRef: AngularFireList<any>;
  instituciones: Array<any>
  institucionesObservable: Observable<any>;

  constructor(public af: AngularFireDatabase,
    public router: Router,
    public toastr: ToastrService) {

    //MOSTRAR INSTITUCIONES
    this.institucionesRef = af.list('/categories');
    this.institucionesObservable = this.institucionesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });;
    this.institucionesObservable.subscribe((response) => {
      this.instituciones = response;
      console.log("instituciones: ", this.instituciones);

      this.categories.map(division => {

        division.institucion_nombre = 'holi';
        console.log("mi division: ", division);
      });
    })


    this.catRef = this.af.list('/divisiones');
    this.categoryData = this.catRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    this.categoryData.subscribe((res) => {
      this.categories = res;
      console.log("divisiones: ", this.categories);

      this.categories.map(division => {
        console.log("id institucion (division): ", division.id_institucion);
         let institucion = this.instituciones.filter((item) => item.key == division.id_institucion);
         division.institucion_nombre = institucion[0].title;

        //division.institucion_nombre = 'holi';
        console.log("mi division: ", division);
      });
    });




  }



  getCategory(ev: any) {
    let val = ev;
    this.categoryData = this.af.list('/divisiones', ref => ref.orderByChild('title').startAt(val.charAt(0).toUpperCase() + val.slice(1))
      .endAt(val.charAt(0).toUpperCase() + val.slice(1) + '\uf8ff')).valueChanges();
    this.categoryData
      .subscribe((data) => {
        this.categories = data;
      });


  }


  categoryShow(key) {
    this.router.navigate(['/organizations/viewOrganization', key]);
  }

  categoryEdit(key) {
    this.router.navigate(['/organizations/editOrganization', key]);
  }

  categoryDelete(key: any, i: any) {
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
        this.catRef.remove(key).then(resp => {
          swal('Registro Eliminado', 'División eliminada correctamente!', 'success');
        })
      } else {
        swal('Anulado', 'La división no ha sido eliminada!', 'error');
      }
    });
  }

  ngOnInit() {

  }

}
