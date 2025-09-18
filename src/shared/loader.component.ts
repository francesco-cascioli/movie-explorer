import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader"></div>
  `,
  styles: [`
   .loader {
  border: 6px solid rgba(255, 255, 255, 0.2);
  border-top: 6px solid #e50914; 
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 80px auto;
  animation: spin 0.8s linear infinite, pulse 1.5s ease-in-out infinite;
}

@keyframes spin {
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(229, 9, 20, 0.6); }
  50% { box-shadow: 0 0 20px 10px rgba(229, 9, 20, 0); }
}
  `]
})
export class LoaderComponent {}
