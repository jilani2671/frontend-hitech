// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {
//   isSidebarOpen = false;
//   isDropdownOpen: { [key: string]: boolean } = {};

//   toggleSidebar() {
//     this.isSidebarOpen = !this.isSidebarOpen;
//   }

//   closeSidebar() {
//     this.isSidebarOpen = false;
//   }

//   toggleDropdown(dropdownId: string) {
//     this.isDropdownOpen[dropdownId] = !this.isDropdownOpen[dropdownId];
//   }
// }


import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSidebarOpen = false;
  isDropdownOpen: { [key: string]: boolean } = {}; 

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  toggleDropdown(dropdownId: string) {

    this.isDropdownOpen[dropdownId] = !this.isDropdownOpen[dropdownId];
  }

  closeAllDropdowns() {

    this.isDropdownOpen = {};
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
   
    if (!target.closest('.fixed')) {
      this.closeSidebar();
    }
  }
}




// import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
// import { Router, NavigationStart } from '@angular/router';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit, OnDestroy {
//   isSidebarOpen = false; // State for the sidebar
//   isDropdownOpen: { [key: string]: boolean } = {}; // State for dropdowns

//   constructor(private router: Router) {}

//   ngOnInit() {
//     // Close all dropdowns when navigating to a new route
//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationStart) {
//         this.closeAllDropdowns();
//       }
//     });
//   }

//   ngOnDestroy() {
//     // Cleanup the subscription to prevent memory leaks
//     // this.router.events.unsubscribe();
//   }

//   toggleSidebar() {
//     this.isSidebarOpen = !this.isSidebarOpen;
//   }

//   closeSidebar() {
//     this.isSidebarOpen = false;
//   }

//   toggleDropdown(dropdownId: string) {
//     // Toggle specific dropdown visibility
//     this.isDropdownOpen[dropdownId] = !this.isDropdownOpen[dropdownId];
//   }

//   closeAllDropdowns() {
//     // Close all dropdowns
//     this.isDropdownOpen = {};
//   }

//   @HostListener('document:click', ['$event'])
//   handleOutsideClick(event: Event) {
//     const target = event.target as HTMLElement;

//     // Check if the click is outside the sidebar and dropdown
//     if (!target.closest('.fixed') && !target.closest('.relative')) {
//       this.closeSidebar();
//       this.closeAllDropdowns(); // Close dropdowns as well when clicking outside
//     }
//   }
// }
