import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppError } from '../common/app-error';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http : Http) { }

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post){
    return  this.http.post(this.url, JSON.stringify(post)).
      pipe(
        catchError((error: Response) => {
          if(error.status === 400)
                    return throwError(new BadInput(error));
                else
                     return throwError(new AppError(error));
        })
      );
  }

  updatePost(post){
   return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(id){
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError((error: Response) => {
          console.log(error);

          if(error.status === 404)
                    return throwError(new NotFoundError());
                else
                     return throwError(new AppError(error));
        })
      );
   
  }
}
