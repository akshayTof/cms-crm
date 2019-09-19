import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import {Inject} from '@angular/core';
import {SataticdataService} from '../../staticpage/staticservice/sataticdata.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  public pageName = 'Job';

  constructor(@Inject(Router) public router: Router, public sataticdataService: SataticdataService) { }

  ngOnInit() {
  }

  @Input() callback: Function;
    redirectToHome() {
        this.router.navigateByUrl('artist');
    }
    redirectToAbout() {
        this.router.navigateByUrl('artist');
    }
    logMeOut(){
        this.router.navigateByUrl('login');
    }
    redirectToStaticpage(arg) {
        this.sataticdataService.setStaticData(arg);
        console.log(arg);
        if(this.callback){
            this.callback(arg);
        }else{
            this.router.navigateByUrl('staticpage');
        }
    }

}
