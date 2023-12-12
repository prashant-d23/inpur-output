import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DisplayListComponent } from './List-Maker-App/display-list/display-list.component';
import { CreateListComponent } from './List-Maker-App/create-list/create-list.component';
import { GetUserDetailsComponent } from './User-Details-App/get-user-details/get-user-details.component';
import { ShowUserDetailsComponent } from './User-Details-App/show-user-details/show-user-details.component';
import { EmployeeListComponent } from './employeeList-App/employee-list/employee-list.component';
import { RadioListCountComponent } from './employeeList-App/radio-list-count/radio-list-count.component';
import { CreateDataComponent } from './create-Update-Data/create-data/create-data.component';
import { ShowDataComponent } from './create-Update-Data/show-data/show-data.component';
import { DataSharingPracticeComponent } from './practice/1/data-sharing-practice/data-sharing-practice.component';
import { DataShareingPracticeParentComponent } from './practice/1/data-shareing-practice-parent/data-shareing-practice-parent.component';
import { CounterComponent } from './input-output-Example/counter/counter.component';
import { SendCounterComponent } from './input-output-Example/send-counter/send-counter.component';
import { RegistrationFormComponent } from './ReactiveFormExample/registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParentRenderListComponent } from './practice-29M/parent-render-list/parent-render-list.component';
import { ChildCreateListComponent } from './practice-29M/child-create-list/child-create-list.component';
import { TableComponent } from './Practive J3/table/table.component';
import { FormComponent } from './Practive J3/form/form.component';
import { JinputchildComponent } from './IO-Example-J10/jinputchild/jinputchild.component';
import { JoutputparentComponent } from './IO-Example-J10/joutputparent/joutputparent.component';
import { UserFormComponent } from './input output task/user-form/user-form.component';
import { UserdetailsComponent } from './input output task/userdetails/userdetails.component';
import { ReactiveFormComponent } from './input-Output with Form j-16/reactive-form/reactive-form.component';
import { DisplayReactiveformComponent } from './input-Output with Form j-16/display-reactiveform/display-reactiveform.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ProductListComponent,
    CreateProductComponent,
    DisplayListComponent,
    CreateListComponent,
    GetUserDetailsComponent,
    ShowUserDetailsComponent,
    EmployeeListComponent,
    RadioListCountComponent,
    CreateDataComponent,
    ShowDataComponent,
    DataSharingPracticeComponent,
    DataShareingPracticeParentComponent,
    CounterComponent,
    SendCounterComponent,
    RegistrationFormComponent,
    ParentRenderListComponent,
    ChildCreateListComponent,
    TableComponent,
    FormComponent,
    JinputchildComponent,
    JoutputparentComponent,
    UserFormComponent,
    UserdetailsComponent,
    ReactiveFormComponent,
    DisplayReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
