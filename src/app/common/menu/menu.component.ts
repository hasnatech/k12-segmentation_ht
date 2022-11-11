import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public service: MainService, private router:Router) { 
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if(this.service.smallscreen == true){
          this.service.menu = false;
        }
        window.scrollTo(0, 0)
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  ngOnInit(): void {
    console.log(window.innerWidth);
    this.onResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth <= 768){

      this.service.menu = false;
      this.service.smallscreen  = true;
      console.log( this.service.menu );
    }else{
      this.service.menu = true;
      this.service.smallscreen  = false;
    }
  }
}
