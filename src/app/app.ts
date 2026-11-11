import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Christine May T. Dantes';
  location = 'Angeles City, Pampanga';
  email = 'christinedantes1604@gmail.com';
  phone = '0961 985 5459';

  profile = 'I am an Information Technology student specializing in Web Development with a passion for design, creativity, and digital innovation. I focus on UI/UX design, website and mobile application interfaces, graphic design, and video editing. I enjoy creating visually appealing and user-friendly designs while continuously improving my skills.';

  skills = [
    'UI/UX Design',
    'Website Design',
    'Content Creation',
    'Capcut',
    'Figma',
    'IbisPaint',
    'Video Editing',
    'Multitasking',
    'Time Management',
  ];

  message = 'Welcome to my Portfolio! I am Christine';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
