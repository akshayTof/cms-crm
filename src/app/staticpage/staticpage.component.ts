import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, FormControl, NgControl } from '@angular/forms';
import {Inject} from '@angular/core';
import { SataticdataService } from './staticservice/sataticdata.service';

@Component({
  selector: 'app-staticpage',
  templateUrl: './staticpage.component.html',
  styleUrls: ['./staticpage.component.css']
})

export class StaticpageComponent implements OnInit {
  public Editor = ClassicEditor ;
  staticpageForm: FormGroup;
  activeSataticPage;
  activeStaticPageData;

  constructor(public router: Router, private formBuilder: FormBuilder, public sataticdataService: SataticdataService) {
    this.staticpageForm = this.formBuilder.group({
      staticdata: [{value: 'Nancy', disabled: true}]
    });
   }

   type = true;

   public onReady( editor ) {
     editor.ui.getEditableElement().parentElement.insertBefore(
         editor.ui.view.toolbar.element,
         editor.ui.getEditableElement()
     );
 }

   ngOnInit() {
     this.activeSataticPage = this.sataticdataService.getSaticData();
     console.log( 'herhere erehrerhehr ');
     this.sataticdataService.getById(this.activeSataticPage).subscribe(data => {
     this.activeStaticPageData = data;
     console.log(this.activeStaticPageData.status, 'here');
    });
     console.log(this.activeSataticPage);
     if (this.type) {
       console.log('initiliazed');
     }
   }

   callType(arg: string) {
     console.log('recalled ' + arg);
     this.type = false;
   }

   redirectToStaticpage() {
     this.router.navigateByUrl('staticpage');
   }

   onSubmit() {
     console.log(this.staticpageForm.controls.staticdata.value);
   }

  createConent(arg) {
    console.log(this.staticpageForm);
  }

  editConent(arg) {
    this.sataticdataService.update(arg);
    console.log(this.staticpageForm);
  }

  getConent(arg) {
    this.sataticdataService.update(arg);
    console.log(this.staticpageForm);
  }

  deleteConent(arg) {
    console.log(this.staticpageForm);
  }

   enable() {
     this.staticpageForm.controls.staticdata.enable();
   }

}
