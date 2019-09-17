import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as ClassicEditor  from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, FormControl, NgControl } from '@angular/forms';
import {Inject} from '@angular/core';

@Component({
  selector: 'app-staticpage',
  templateUrl: './staticpage.component.html',
  styleUrls: ['./staticpage.component.css']
})
export class StaticpageComponent implements OnInit {
  public Editor = ClassicEditor ;
  staticpageForm: FormGroup;
  constructor(@Inject(Router) public router: Router, @Inject(FormBuilder) private formBuilder: FormBuilder) {
    this.staticpageForm = this.formBuilder.group({
      saticdata: {value :'<p>asdasdasdasdty54754745</p>', disabled: true}
    });
   }

   type:boolean = true;

   public onReady( editor ) {
     editor.ui.getEditableElement().parentElement.insertBefore(
         editor.ui.view.toolbar.element,
         editor.ui.getEditableElement()
     );
 }

   ngOnInit() {
     if (this.type) {
       console.log('initiliazed');
     }
   }

   callType(arg: string) {
     console.log('recalled '+arg);
     this.type = false
   }



   redirectToStaticpage() {
     this.router.navigateByUrl('staticpage');
   }

   onSubmit() {
     console.log(this.staticpageForm);
   }

   enable() {
     this.staticpageForm.controls['saticdata'].enable();
   }

}
