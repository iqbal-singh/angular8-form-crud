import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { SellerEditFormComponent } from './components/seller-form/seller-edit-form/seller-edit-form.component';
import { SellerNewFormComponent } from './components/seller-form/seller-new-form/seller-new-form.component';
import { SellerTableComponent } from './components/seller-table/seller-table.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule,AngularFireList  } from '@angular/fire/database';
import { environment } from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';

const appRoutes: Routes = [
   { path: 'new', component: SellerNewFormComponent },
   { path: 'edit/:key', component: SellerEditFormComponent },
   { path: '',
   redirectTo: '/new',
   pathMatch: 'full'
 },
 { path: '**', component: SellerNewFormComponent }];


@NgModule({
   declarations: [
      AppComponent,
      SellerNewFormComponent,
      SellerEditFormComponent,
      SellerTableComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      BrowserAnimationsModule,
      MaterialModule,
      RouterModule.forRoot(
         appRoutes,
         { enableTracing: false , scrollPositionRestoration: 'enabled'})
      ],
   providers: [

   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
