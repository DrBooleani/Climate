import { Component, Output, EventEmitter } from "@angular/core";
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';

@Component({
  selector: "app-search-bar",
  standalone: false,
  template: `
    <main class="search">
      <form #form="ngForm" (submit)="onSubmit()">
        <input
          type="text"
          placeholder="Buscar localização"
          name="city"
          [(ngModel)]="initialCityName"
        />
        <span (click)="onSubmit()">
          <fa-icon
            animation="fade"
            style="--fa-animation-duration: 5s; cursor: pointer;"
            [size]="'lg'"
            class="search-icon"
            [icon]="searchIcon"
          />
        </span>
      </form>
    </main>
  `,
  styles: [``],
})
export class SearchBarComponent {
  initialCityName: string = "Brasilia";
  public readonly searchIcon = faSearch;
  
  @Output() searchEvent = new EventEmitter<string>();

  onSubmit(): void {
    this.searchEvent.emit(this.initialCityName);
  }
}
