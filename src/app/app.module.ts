import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { TooltipModule } from 'ng2-tooltip-directive';


@NgModule({
  declarations: [AppComponent, HeaderComponent, ContentComponent, FooterComponent],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatIconModule,
      TooltipModule,
      MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
