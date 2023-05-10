import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 public currentLanguage

  constructor() {
  this.currentLanguage = "en"
    const userLocale = localStorage.getItem('locale');
    // If the user has a preferred language stored in localStorage, use it.
    if (userLocale) {
      this.currentLanguage = userLocale;
    }

  }

  changeLocale(locale: Event) {
    // Store the user's preferred locale in localStorage
    // @ts-ignore
    localStorage.setItem('locale', locale.target.value);
    // Reload the page to apply the new locale
    location.reload();
  }

  ngOnInit(): void {
  }

}
