import { ViewOrganizationComponent } from './restaurant/organizations/view-organization/view-organization.component';
import { EditOrganizationComponent } from './restaurant/organizations/edit-organization/edit-organization.component';
import { AddOrganizationComponent } from './restaurant/organizations/add-organization/add-organization.component';
import { OrganizationsComponent } from './restaurant/organizations/organizations.component';
import {NgModule} from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

import { LoginComponent } from './pages/login/login.component';

import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { Error404Component } from './pages/error404/error404.component';

import { HomeComponent } from './home/home/home.component';


import {CategoriesComponent} from './restaurant/categories/categories.component';
import {AddCategoriesComponent} from './restaurant/categories/add-categories/add-categories.component';
import {MenuItemsComponent} from './restaurant/menu-items/menu-items.component';
import {AddItemComponent} from './restaurant/menu-items/add-item/add-item.component';
import {OrdersComponent} from './restaurant/orders/orders.component';
import {ViewOrderComponent} from './restaurant/orders/view-order/view-order.component';

 import {UsersComponent} from './restaurant/users/users.component';
 import {AddUserComponent} from './restaurant/users/add-user/add-user.component'; 
 import {ViewUserComponent} from './restaurant/users/view-user/view-users.component';

import {SettingsComponent} from './restaurant/settings/settings.component';

import { ChatComponent } from './restaurant/chat/chat.component';

import {TagsComponent} from './restaurant/tags/tags.component';
import {EditTagesComponent} from './restaurant/tags/edit-tages/edit-tages.component';
import {AddTagsComponent} from './restaurant/tags/add-tags/add-tags.component';
import {BusinessInfoComponent} from './restaurant/business-info/business-info.component';
import {ProfileComponent} from './restaurant/profile/profile.component';
import {EditCategoryComponent} from './restaurant/categories/edit-category/edit-category.component';
import {ViewCategoryComponent} from './restaurant/categories/view-category/view-category.component';
import {ViewItemComponent} from './restaurant/menu-items/view-item/view-item.component';
import {EditItemComponent} from './restaurant/menu-items/edit-item/edit-item.component';
import {NewsComponent} from './restaurant/news/news.component';
import {AddNewsComponent} from './restaurant/news/add-news/add-news.component';
import {EditNewsComponent} from './restaurant/news/edit-news/edit-news.component';
import {ViewNewsComponent} from './restaurant/news/view-news/view-news.component';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import {FileUploadModule} from 'ng2-file-upload';
import {AuthService} from './pages/login/auth.service';
import {LoginService} from './pages/login/login.service';
import {Ng2PaginationModule} from 'ng2-pagination';
import {DataTableModule} from "angular2-datatable";

import {CouponsComponent} from './restaurant/coupons/coupons.component';
import {AddCouponsComponent} from './restaurant/coupons/add-coupons/add-coupons.component';

import { PushNotificationComponent } from './restaurant/push-notification/push-notification.component';


export const routes = [
    
    {path: '', component: LoginComponent, useAsDefault: true},
    {path: 'login', component: LoginComponent},

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent, canActivate: [AuthService]},
            { path: 'pushNotification', component: PushNotificationComponent, canActivate: [AuthService]},
            
            {
                path: 'coupons',
                children: [
                    {path: 'all', component: CouponsComponent, canActivate: [AuthService]},
                    {path: 'addCoupons', component: AddCouponsComponent, canActivate: [AuthService]}
                    
               ]
           },
        
             {
                path: 'categories',
                children: [
                    {path: 'manageCategories', component: CategoriesComponent, canActivate: [AuthService]},
                    {path: 'addCategory', component: AddCategoriesComponent, canActivate: [AuthService]},
                    {path: 'editCategory/:id', component: EditCategoryComponent, canActivate: [AuthService]},
                    {path: 'viewCategory/:id', component: ViewCategoryComponent, canActivate: [AuthService]}
                ]
            },

            {
              path: 'organizations',
              children: [
                  {path: 'manageOrganizations', component: OrganizationsComponent, canActivate: [AuthService]},
                  {path: 'addOrganization', component: AddOrganizationComponent, canActivate: [AuthService]},
                  {path: 'editOrganization/:id', component: EditOrganizationComponent, canActivate: [AuthService]},
                  {path: 'viewOrganization/:id', component: ViewOrganizationComponent, canActivate: [AuthService]}
              ]
          },

            {
                path: 'news',
                children: [
                    {path: 'manageNews', component: NewsComponent, canActivate: [AuthService]},
                    {path: 'addNews', component: AddNewsComponent, canActivate: [AuthService]},
                    {path: 'editNews/:id', component: EditNewsComponent, canActivate: [AuthService]},
                    {path: 'viewNews/:id', component: ViewNewsComponent, canActivate: [AuthService]}
                ]
            },

            {
                path: 'order',
                children: [
                    {path: 'allOrder', component: OrdersComponent, canActivate: [AuthService]},
                    {path: 'viewOrder/:id', component: ViewOrderComponent, canActivate: [AuthService]},

                ]
            },

            {
                path: 'menu',
                children: [
                    {path: 'manageItems', component: MenuItemsComponent, canActivate: [AuthService]},
                    {path: 'addItems', component: AddItemComponent, canActivate: [AuthService]},
                    {path: 'viewItems/:id', component: ViewItemComponent, canActivate: [AuthService]},
                    {path: 'editItems/:id', component: EditItemComponent, canActivate: [AuthService]},

                ]
            },

            {
                path: 'users',
                children: [
                    {path: 'manageUsers', component: UsersComponent, canActivate: [AuthService]},
                   {path: 'addUser', component: AddUserComponent, canActivate: [AuthService]},
                   {path: 'viewUser/:id', component: ViewUserComponent, canActivate: [AuthService]}

                ]
            },

            {
                path: 'tags',
                children: [
                    {path: 'all', component: TagsComponent, canActivate: [AuthService]},
                    {path: 'addTags', component: AddTagsComponent, canActivate: [AuthService]},
                    {path: 'editTags/:id', component: EditTagesComponent, canActivate: [AuthService]}
                ]

            },
            
            {path: 'chat', component: ChatComponent, canActivate: [AuthService]},

            {path: 'setting', component: SettingsComponent, canActivate: [AuthService]},

            {path: 'businessInfo', component: BusinessInfoComponent, canActivate: [AuthService]},

            {path: 'UserProfile', component: ProfileComponent, canActivate: [AuthService]},

        ] // children End
    },

    // Not lazy-loaded routes
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: '404', component: Error404Component },

    // Not found
    { path: '**', redirectTo: '404' }

];

@NgModule({ 
providers: [
        
        AuthService,
        LoginService
    ]
})
class RestModule {
}
