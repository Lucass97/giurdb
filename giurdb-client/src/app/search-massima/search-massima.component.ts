import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DatePipe} from "@angular/common";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";


@Component({
  selector: 'app-search-massima',
  templateUrl: './search-massima.component.html',
  styleUrls: ['./search-massima.component.css']
})
export class SearchMassimaComponent {

  searchForm: FormGroup;

  voceList = ['Lavoro (Rapporto di)', 'Violenza'];

  sottovociMap = new Map<string, string[]>([
  ['Lavoro (Rapporto di)', ['Cantiere', 'Contratto']],
  ['Violenza', ['Domestica', 'Privata']],
]);
  sottovoci: string[] = [];

  separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {
    this.searchForm = this.fb.group({
      searchInput: ['', Validators.required],
      searchOption: ['allWords'],
      voce: [null],
      sottovoce: [null],
      entiGiudicanti: [null],
      sezione: [null]
    });
  }

  clearSearch() {
    this.searchForm.controls['searchInput'].setValue('');
  }

  submitSearch() {
    console.log(this.searchForm.value);
    // Replace console.log with your search logic
  }

  get filteredSottovoci(): string[] {
    const voce = this.searchForm.controls['voce'].value.toString();
    const sottovoci = this.sottovociMap.get(voce);
    const usedSottovoci = this.sottovoci.map(element => {
  return element.toString().toLowerCase()});
    if (voce && sottovoci) {
      return sottovoci.filter(sottovoce => !usedSottovoci.includes(sottovoce.toString().toLowerCase()));
    } else {
      return [];
    }

  }

  displaySottovoce(sottovoce: string): string {
    return sottovoce ? sottovoce : '';
  }

  addSottovoce(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value.toString().toLowerCase();
    const voce = this.searchForm.controls['voce'].value.toString();
    const sottovoci = this.sottovociMap.get(voce)?.map(element => {
  return element.toString().toLowerCase()});
    const usedSottovoci = this.sottovoci.map(element => {
  return element.toString().toLowerCase()});

    if ((value || '').trim() && sottovoci?.includes(value) && !usedSottovoci.includes(value)) {

      this.sottovoci.push(value.trim());
      console.log(this.sottovoci)

    }

    if (input) {
      input.value = '';
    }
  }

  removeSottovoce(sottovoce: string): void {
    const index = this.sottovoci.indexOf(sottovoce);
    if (index >= 0) {
      this.sottovoci.splice(index, 1);
    }
  }

  selectSottovoce(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue;
    this.sottovoci.push(value);
    this.searchForm.controls['sottovoci'].setValue(null);
  }


}
