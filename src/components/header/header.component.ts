import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
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
