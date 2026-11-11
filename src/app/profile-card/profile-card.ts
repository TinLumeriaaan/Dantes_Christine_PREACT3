import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'I am a designer who loves in exploring creativity at the intersection of design and technology. I find joy in transforming concepts into visual representations, trying out various styles, and crafting designs that are not only aesthetically pleasing but also practical. I have a constant desire to acquire new knowledge, uncover imaginative opportunities, and evolve both personally and professionally.';
}
