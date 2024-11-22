import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
    });
  }

  ngAfterViewInit(): void {
    this.setupPagination();
  }

  setupPagination(): void {
    const pageButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.pagination button');
    const reviewCards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.review-card');

    pageButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const page = index === 0 ? 'prev' : index === pageButtons.length - 1 ? 'next' : index;

        reviewCards.forEach((card, i) => {
          if (page === 'prev') {
            if (i < reviewCards.length - 1) card.style.display = 'none';
          } else if (page === 'next') {
            if (i >= 1) card.style.display = 'none';
          } else {
            card.style.display = 'block';
          }
        });
      });
    });
  }

  isPopupVisible: boolean = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }
}
