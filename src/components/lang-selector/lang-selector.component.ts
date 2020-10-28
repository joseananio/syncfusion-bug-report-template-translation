import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface LanguageItem {
  id: string;
  flagId?: string;
  name: string;
}
const languagesDb: LanguageItem[] = [
  { id: 'de', name: 'Deutsch' },
  { id: 'en', name: 'English' },
];

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss'],
})
export class LangSelectorComponent implements OnInit {
  selectedLang?: string;

  public appLanguages: LanguageItem[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.selectedLang = this.translate.getDefaultLang();
    this.appLanguages = languagesDb.filter((lang) =>
      this.translate.langs.includes(lang.id)
    );
    this.translate.onLangChange.subscribe(() => {
      this.selectedLang = this.translate.currentLang;
    });
  }

  onLangChange(langId: string): void {
    this.translate.use(langId).subscribe(() => {
      this.selectedLang = this.translate.currentLang;
    });
  }
}
