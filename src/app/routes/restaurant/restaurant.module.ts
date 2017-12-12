import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
//import {ColorPickerModule, ColorPickerService} from 'angular2-color-picker/lib';
import {CustomFormsModule} from 'ng2-validation';
import {SharedModule} from '../../shared/shared.module';

import {CategoriesComponent} from './categories/categories.component';
import {AddCategoriesComponent} from './categories/add-categories/add-categories.component';
import {MenuItemsComponent} from './menu-items/menu-items.component';
import {AddItemComponent} from './menu-items/add-item/add-item.component';
import {OrdersComponent} from './orders/orders.component';
import {ViewOrderComponent} from './orders/view-order/view-order.component';

 import {UsersComponent} from './users/users.component';
 import {AddUserComponent} from './users/add-user/add-user.component'; 
 import {ViewUserComponent} from './users/view-user/view-users.component';

import {SettingsComponent} from './settings/settings.component';
import {TagsComponent} from './tags/tags.component';
import {EditTagesComponent} from './tags/edit-tages/edit-tages.component';
import {AddTagsComponent} from './tags/add-tags/add-tags.component';
import {BusinessInfoComponent} from './business-info/business-info.component';
import {ProfileComponent} from './profile/profile.component';
import {EditCategoryComponent} from './categories/edit-category/edit-category.component';
import {ViewCategoryComponent} from './categories/view-category/view-category.component';
import {ViewItemComponent} from './menu-items/view-item/view-item.component';
import {EditItemComponent} from './menu-items/edit-item/edit-item.component';
import {NewsComponent} from './news/news.component';
import {AddNewsComponent} from './news/add-news/add-news.component';
import {EditNewsComponent} from './news/edit-news/edit-news.component';
import {ViewNewsComponent} from './news/view-news/view-news.component';
import {CouponsComponent} from './coupons/coupons.component';
import {AddCouponsComponent} from './coupons/add-coupons/add-coupons.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';

import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import {FileUploadModule} from 'ng2-file-upload';
import {AuthService} from '../pages/login/auth.service';
import {LoginService} from '../pages/login/login.service';

import {Ng2PaginationModule} from 'ng2-pagination';
import {DataTableModule} from "angular2-datatable";
import { ChatComponent } from './chat/chat.component';
import { ChatBoxComponent } from './chat/chat-box/chat-box.component';
import { StoreModule } from '@ngrx/store';
import {chatData} from "./chat/action";
import { OrganizationsComponent } from './organizations/organizations.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AddOrganizationComponent } from './organizations/add-organization/add-organization.component';
import { EditOrganizationComponent } from './organizations/edit-organization/edit-organization.component';
import { ViewOrganizationComponent } from './organizations/view-organization/view-organization.component';


@NgModule({
    imports: [
        SharedModule,
        CustomFormsModule,
        Ng2PaginationModule,
        DataTableModule,
        Ng2CloudinaryModule,
        FileUploadModule,        
        StoreModule.provideStore({data: chatData}) 
    ],

    declarations: [
        CategoriesComponent,
        AddCategoriesComponent,
        MenuItemsComponent,
        AddItemComponent,
        OrdersComponent,       
        SettingsComponent,
        TagsComponent,
        EditTagesComponent,
        AddTagsComponent,
        BusinessInfoComponent,
        ViewOrderComponent,
        ProfileComponent,
        EditCategoryComponent,
        ViewCategoryComponent,
        NewsComponent,
        AddNewsComponent,
        EditNewsComponent,
        ViewNewsComponent,
        ViewItemComponent,
        EditItemComponent,
        AddCouponsComponent,
        CouponsComponent,
        PushNotificationComponent,
        ChatComponent,
        ChatBoxComponent,
        UsersComponent,
        ViewUserComponent,
        AddUserComponent,
        OrganizationsComponent,
        EditUserComponent,
        AddOrganizationComponent,
        EditOrganizationComponent,
        ViewOrganizationComponent
    ],
    providers: [
        AuthService,
        LoginService
    ],

    exports: [RouterModule,
        Ng2PaginationModule,
        DataTableModule
    ]
})



export class RestaurantModule {
}
