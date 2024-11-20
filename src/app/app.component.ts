import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import { DegitalRevolutionComponent } from "./components/degital-revolution/degital-revolution.component";
import { CountsComponent } from "./components/counts/counts.component";
import { HelpingBusinessComponent } from "./components/helping-business/helping-business.component";
import { InnovationComponent } from "./components/innovation/innovation.component";
import { AboutBusinessComponent } from "./components/about-business/about-business.component";
import { OurWordComponent } from "./components/our-word/our-word.component";
import { StoryComponent } from "./components/story/story.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, DegitalRevolutionComponent, CountsComponent, HelpingBusinessComponent, InnovationComponent, AboutBusinessComponent, OurWordComponent, StoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'traverse';
}
