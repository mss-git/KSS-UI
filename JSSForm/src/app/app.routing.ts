import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './Login/login.component';
import { HistoricalComponent } from './history/History.component';
import { FormComponent } from './form/form.component';
import { ReviewComponent } from './review/review.component';

export const routes : Routes = [
    { path: "", component: LoginComponent},
    { path: "/history", component: HistoricalComponent},
    { path: "/form", component: FormComponent},
    { path: "/review", component: ReviewComponent}
]