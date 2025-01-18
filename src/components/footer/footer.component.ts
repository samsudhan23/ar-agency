import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router: Router) {

  }

  ngOnInit() {
    // this.router.events.subscribe((event) => {
    //   if (!(event instanceof NavigationEnd)) {
    //     return;
    //   }
    //   window.scrollTo(0, 0)
    // });
  }

  goToLink(link: any) {
    if (link == 'about') {
      this.router.navigate(['/about'])
    }
    else if (link == 'service') {
      this.router.navigate(['/service'])
    }
    else if (link == 'why') {
      this.router.navigate(['/why'])
    }
    else if (link == 'team') {
      this.router.navigate(['/team'])
    } else if (link == 'home') {
      this.router.navigate(['/'])

    }
    setTimeout(() => {
      window.location.reload();
    }, 500)
  }

}
