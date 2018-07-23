import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';
import { ENGINE_METHOD_DIGESTS } from 'constants';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService){

  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(response => this.posts = response.json());
  }

  create(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.json().id;
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          }
          else throw error;
        });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost.json());
      }, error => {
          alert('An uxpected error occurred');
          console.log(error);
      });
  }

  deletePost(post) {
      this.service.delete(345)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
      }, (error: AppError) => {
          if(error instanceof NotFoundError){
            alert('This post has already beend deleted');
          }
          else {
            throw error;
          }
         
      });
  }

}
