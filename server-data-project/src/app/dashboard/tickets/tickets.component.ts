import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

@Component({
  selector: 'app-tickets',
  imports: [NewTicketComponent],
  standalone: true,
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {}
