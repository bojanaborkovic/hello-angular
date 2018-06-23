import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title = "List of authors";

  authors;

  constructor(service: AuthorService) {
      this.authors = service.getAuthors();
   }

  ngOnInit() {
  }

}
