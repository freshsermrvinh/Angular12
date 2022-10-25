import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OnSalePipe } from './on-sale.pipe';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { HighLightDirective } from './Directives/high-light.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetDataComponent } from './get-data/get-data.component';
import { PostDataComponent } from './post-data/post-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OnSalePipe,
    PageNotFoundComponentComponent,
    HighLightDirective,
    ReactiveFormComponent,
    GetDataComponent,
    PostDataComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
