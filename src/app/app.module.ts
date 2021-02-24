import { FactoryModule } from './factory/FormBuilderFactory';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterialModule } from './angular-material/angular-material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDefaultFormComponent } from './components/forms/user-default-form/user-default-form.component';
import { UserListComponent } from './components/list/user-list/user-list.component';
import { DetailsComponent } from './components/common/details/details.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfirmDeleteComponent } from './components/dialogs/confirm-delete/confirm-delete.component';
import { CreateUserModalComponent } from './components/dialogs/create-user-modal/create-user-modal.component';
import { TextInputComponent } from './components/inputs/text-input/text-input.component';
import { SelectInputComponent } from './components/inputs/select-input/select-input.component';
import { CheckboxInputComponent } from './components/inputs/checkbox-input/checkbox-input.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    CreateUserModalComponent,
    UserDefaultFormComponent,
    UserListComponent,
    DetailsComponent,
    ConfirmDeleteComponent,
    TextInputComponent,
    SelectInputComponent,
    CheckboxInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [HttpClientModule, FactoryModule],
  bootstrap: [AppComponent],
  entryComponents: [CreateUserModalComponent, ConfirmDeleteComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
