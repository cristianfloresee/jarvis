import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-view-organization',
  templateUrl: './view-organization.component.html',
  styleUrls: ['./view-organization.component.scss']
})
export class ViewOrganizationComponent implements OnInit {

  public categoryDetails: any = {};
  public catRef: AngularFireObject<any>;
  public catObservable: Observable<any>;

  constructor(private route: ActivatedRoute,
    public router: Router,
    public af: AngularFireDatabase) {

    this.route.params.map(params => params['id']).subscribe((Id) => {
      if (Id != null) {
        this.catRef = this.af.object('/divisiones/' + Id);
        this.catObservable = this.catRef.valueChanges();
        this.catObservable.subscribe((response) => {
          this.categoryDetails = response;
        });
      }
    });
  }

  ngOnInit() {
  }

}
