import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
//import { FileSelectDirective } from 'ng2-file-upload';
import{FacebookService} from './facebook.service';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HttpClient, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { ClaimService } from './claim.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClaimsListComponent } from './claims-list/claims-list.component';
import { ClaimsCreateComponent } from './claims-create/claims-create.component';
import { LoginComponent } from './login/login.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import{ButtonModule} from  'primeng/primeng';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { RegistrationComponent } from './registration/registration.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HomeComponent } from './home/home.component';
import { ImageService } from './image.service';
import  {AuthentificationService} from './authentification.service';
import { ProfileComponent } from './profile/profile.component';
import { DataTableModule} from 'primeng/primeng';
import { MatTabsModule } from '@angular/material';
import {TableModule} from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {SplitButtonModule} from 'primeng/splitbutton';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule, MatToolbarModule, MatToolbar, MatButtonModule, MatButton,MatDialogModule, MatMenuModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {JwtInterceptor} from './jwt.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';
import {      
   
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,      
  MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher, MatSidenavModule, MatIconModule, MatListModule      
} from '@angular/material';  
import { SuccessDialogComponent } from './shared/dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './shared/dialogs/error-dialog/error-dialog.component';
import { LayoutModule } from '@angular/cdk/layout';
import 'hammerjs';
import { NavComponent } from './nav/nav.component';
import { FacebookComponent } from './facebook/facebook.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,SuccessDialogComponent,
    ErrorDialogComponent,
    FooterComponent,
    ClaimsListComponent,
    ClaimsCreateComponent,
  //  FileSelectDirective,
    LoginComponent,
    
    RegistrationComponent,
    
    GoogleMapComponent,
    
    HomeComponent,
    
    ProfileComponent,
    
    
    NavComponent,
    
    
    FacebookComponent,
    
    
  
    
  ],
  imports: [
    BrowserModule,DataTableModule,TableModule,DialogModule,ToastModule,  BrowserModule,MatDialogModule,
    FormsModule,  MatTabsModule,    FlexLayoutModule,
    ReactiveFormsModule,      
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule  ,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,HttpClientModule,
    CommonModule,
    MessageModule,
    MessagesModule,
    ButtonModule,
    DataTableModule, ToastrModule.forRoot(), MDBBootstrapModule.forRoot(),
    HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        AgmCoreModule.forRoot({
          apiKey: environment.googleMapsKey
        }),
       ToastModule,SplitButtonModule,
       MatCardModule,
       MatToolbarModule,
       MatButtonModule,
       MatMenuModule,
       MatFormFieldModule,
       MatTableModule,
       MatPaginatorModule,
       MatInputModule,
       LayoutModule,
       MatSidenavModule,
       MatIconModule,
       MatListModule 
  ], 
   schemas: [ NO_ERRORS_SCHEMA ],

  exports: [
    BrowserModule,
    MatIconModule, 
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,MatDialogModule,
      
    BrowserAnimationsModule,      
          
       
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule   
   ],
   entryComponents: [
     SuccessDialogComponent,
     ErrorDialogComponent
   ],
  providers: [ClaimService,ImageService,FacebookService,AuthentificationService,{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher} ,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
   




  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
