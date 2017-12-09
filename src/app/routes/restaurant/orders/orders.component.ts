import { Component } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';
import { NgForm } from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/Operator/map';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers:[OrdersService]
})
export class OrdersComponent {


  orders:Array<any>;
  ordersDataRef: AngularFireList<any>;
  orderObservable:Observable<any>;
    constructor(public af:AngularFireDatabase,
      public toastr: ToastrService,
      public router:Router,
      public ordersService:OrdersService) {
     this.ordersDataRef = af.list('/orders');
       this.orderObservable = this.ordersDataRef.snapshotChanges().map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
       this.orderObservable.subscribe((res)=>{       
           this.orders = res.reverse();
       });   
    }

    OnChangeStatus(key,event){
      this.ordersDataRef.update(key,{status:event.target.value}).then((res)=>{
          var message = { 
          app_id: "ace5d8a2-5018-4523-ab21-cff285d32524",
          contents: {"en": event.target.value},
          include_player_ids: ["31851f36-3730-4c4d-a129-fdcf380d4d86"]
        };

        this.af.list('/orders/'+key+'/statusReading').push({title:event.target.value, time:Date.now()})

         this.ordersService.sendNotification(message).subscribe(response =>{
              
        });
            this.toastr.success('Order status updated!', 'Success!');
        });
    }
     ordersShow(key){
     this.router.navigate(['/order/viewOrder', key]);
  }

}