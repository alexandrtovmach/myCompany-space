import { Component } from '@angular/core';
import { LocalizationService } from './localization.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showPrices: boolean = false;
  activeTab: 'design'|'develop'|'promoute';

  constructor(private locale: LocalizationService) {}

  ngOnInit() {
    this.locale.initLocal()
  }
}
