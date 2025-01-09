import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './products/product.compent';
import { SettingsComponent } from './settings/settings.component';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'pages', component: PagesComponent },
];