import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { APP_ROUTES } from "./app.routes";
import { FooterComponent } from "./components/footer/footer.component";
import { GithubComponent } from "./components/github-info/github-info.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { TopOfPageComponent } from "./components/top-of-page/top-of-page.component";
import { HomeComponent } from "./views/home/home.component";
import { SkillsComponent } from "./views/skills/skills.component";
import { TopnavComponent } from "./components/topnav/topnav.component";
import { SpasComponent } from "./components/spas/spas.component";
import { CardComponent } from "./components/card/card.component";
import { ComponentDocumentationComponent } from "./components/component-documentation/component-documentation.component";
import { DragdropComponent } from "./components/dragdrop/dragdrop.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    TopOfPageComponent,
    FooterComponent,
    GithubComponent,
    SkillsComponent,
    TopnavComponent,
    SpasComponent,
    CardComponent,
    ComponentDocumentationComponent,
    DragdropComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
