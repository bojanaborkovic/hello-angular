import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  getAuthors(){
    let authors = ["author1", "author2", "author3"];
    return authors;
  }  
}
