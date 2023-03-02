import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ComponentDocumentationComponent } from "./component-documentation/component-documentation.component";
import { COMPONENTS_ROUTES } from "./components.routes";

declarations: [ComponentDocumentationComponent];
imports: [CommonModule, RouterModule.forChild(COMPONENTS_ROUTES)];
export class ComponentsModule {}
