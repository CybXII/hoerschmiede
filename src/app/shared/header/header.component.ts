import { Component } from '@angular/core';
import { ButtonsComponent } from "../buttons/buttons.component";

@Component({
  selector: 'app-header',
  imports: [ButtonsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  buttons = [
    {text: 'Home'},
    {text: 'Leistungen'},
    {text: 'Hörgeräte'},
    {text: 'Über uns'},
    {text: 'Kontakt'},
    {text: 'Hörtest'},
    {text: 'FAQ'}
  ]
}
