import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { AboutComponent } from './app/about/about.component';
import { TermsComponent } from './app/terms/terms.component';
import { PrivacyPolicyComponent } from './app/privacy-policy/privacy-policy.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { MatDialogModule } from '@angular/material/dialog'; 
import { BookService } from 'src/app/services/book.service'; 
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,

  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})

export class AppModule { }
