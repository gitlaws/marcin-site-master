import { Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { ComponentDocumentationComponent } from "./components/component-documentation/component-documentation.component";

export const APP_ROUTES: Routes = [
  {
    path: "",
    component: ComponentDocumentationComponent,
  },

  {
    path: "Components",
    component: HomeComponent,
  },
  {
    path: "Directives",
    component: HomeComponent,
  },
  {
    path: "Pipes",
    component: HomeComponent,
  },
  {
    path: "Services",
    component: HomeComponent,
  },
  {
    path: "Other",
    component: HomeComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
];
