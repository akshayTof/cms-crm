import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import {Inject} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  public pageName = 'Job';

  constructor(@Inject(Router) public router: Router) { }

  ngOnInit() {
  }

  @Input() callback: Function;
    redirectToHome() {
        this.router.navigateByUrl('dashboard/home');
    }
    redirectToAbout() {
        this.router.navigateByUrl('dashboard/about');
    }
    logMeOut(){
        this.router.navigateByUrl('login');
    }
    redirectToStaticpage(arg) {
        console.log(arg);
        if(this.callback){
            this.callback(arg);
        }else{
            this.router.navigateByUrl('staticpage');
        }
    }
}
