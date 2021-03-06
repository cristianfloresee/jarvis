import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../../core/settings/settings.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {Router} from '@angular/router';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {ToastrService} from 'ngx-toastr';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  valForm: FormGroup;
  rememberMe: boolean = false;

  constructor(private _cookieService: CookieService, public af: AngularFireAuth, public settings: SettingsService, fb: FormBuilder, public router: Router, public db: AngularFireDatabase, public toastr: ToastrService) //,public toastr: ToastrService
  {
    this.valForm = fb.group({
      'email': ['admin@admin.com', Validators.compose([Validators.required, CustomValidators.email])],
      'password': ['123456', Validators.required]
    });

    this.getCookie();
  }

  getCookie() {
    let rememberMeData: any = {};
    rememberMeData = this._cookieService.getObject('rememberMe');
    if (rememberMeData != undefined) {
      this.valForm.get('email').setValue(rememberMeData.email);
      this.valForm.get('password').setValue(rememberMeData.password);
    }
    else {
      ////console.log("No data inside cookies");
    }
  }


  submitForm($ev, value: any) {
    $ev.preventDefault();
    for (let c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
    }
    if (this.valForm.valid) {
      if (this.rememberMe) {
        this._cookieService.putObject('rememberMe', this.valForm.value)
      }

      this.af.auth.signInWithEmailAndPassword(value.email, value.password).then((success) => {
        this.db.object('/users/' + success.uid).valueChanges().subscribe((res: any) => {

          if (res.role == "Admin") {
            this.router.navigate(['home']);
            localStorage.setItem('uid', success.uid)
            this.toastr.success('Login Successfully!', 'Success!');

          } else {
            this.toastr.error('Login Failed!', 'You are not an ADMIN!');
          }
        })
      })
    }
  }

  checkMe(){
    
  }

  ngOnInit() {

  }

}
