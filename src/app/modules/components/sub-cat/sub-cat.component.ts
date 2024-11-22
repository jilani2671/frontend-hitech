import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sub-cat',
  templateUrl: './sub-cat.component.html',
  styleUrls: ['./sub-cat.component.css'],
})
export class SubCatComponent {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  // Controls popup visibility
  isPopupOpen = false;

  // Holds the selected rating value
  rating = 0;

  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  }

  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  }

  openReviewPopup() {
    this.isPopupOpen = true; // Open the popup
  }

  closeReviewPopup() {
    this.isPopupOpen = false; // Close the popup
  }

  setRating(star: number) {
    this.rating = star; // Update the rating value
  }
}
