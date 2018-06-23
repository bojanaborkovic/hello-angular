import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'], // last definition is one that is applied
  encapsulation: ViewEncapsulation.Emulated // emulate concept of shadow DOM, attach additional attributes to css rules
})

/*
If you're building reusable components give your input properties
an alias to keep contracts of components stable
 */
export class FavoriteComponent {

  @Input('is-favorite') isSelected : boolean;
  @Output('change') click = new EventEmitter(); // output property

  onClick(){
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected});
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
