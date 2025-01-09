import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.compent.html',
  styleUrl: './product.compent.scss'
})
export class ProductComponent {
  title = 'modern-angular';
}
