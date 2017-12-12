import { Component } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';
import { cloudinarUpload } from '../../../../firebase.config';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { firebaseConfig } from '../../../../firebase.config';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent {

  categories: Array<any>
  categoryObservable: Observable<any>;

  url: any = '';
  category: any = {};
  categoryDataRef: AngularFireList<any>;
  categoryRef: AngularFireList<any>;
  imageId: string;
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions(cloudinarUpload)
  );

  constructor(public af: AngularFireDatabase, public router: Router, public toastr: ToastrService) {

    this.categoryDataRef = af.list('/divisiones');
    this.categoryRef = af.list('/categories');


    this.categoryObservable = this.categoryRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });;
    this.categoryObservable.subscribe((response) => {
      this.categories = response;
      console.log("instituciones: ", this.categories);
    })



    //Override onSuccessItem to retrieve the imageId
    this.uploader.onAfterAddingFile = (item: any) => {
      item.url = this.uploader.options.url;
      return item;
    };
  }

  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
        //this.imageRef = 1;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmitCategory(form: NgForm) {
    this.uploader.uploadAll();
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      let res: any = JSON.parse(response);
      this.category.thumb = res.url;
      this.categoryDataRef.push(this.category).then((res) => {
        this.toastr.success('División Registrada Correctamente!', 'Registro Exitoso!');
        this.router.navigate(['/organizations/manageOrganizations']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/organizations/manageOrganizations']);
  }

}
