import { Component } from '@angular/core';
// import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    body : "this is a tweet",
    likesCount: 10,
    isLiked: true
  }

  // onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
  //   console.log("Favorite changed: ", eventArgs.newValue);
  // }
}
