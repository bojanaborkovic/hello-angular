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

  ngOnInit(){
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response.json();
    }, error => {
      alert('An uxpected error occurred');
      console.log(error);
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value};
    input.value = "";

   this.service.createPost(post)
      .subscribe(
        response => {
          post["id"] = response.json().id;
          this.posts.splice(0, 0, post);
          console.log(response.json());
        }, (error: AppError) => {
            if(error instanceof BadInput){
             // this.form.setErrors(error.originalError);
            }
            else{
              alert('An uxpected error occurred');
              console.log(error);
            }
          
      });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(
        response => {
          console.log(response.json());
      }, error => {
          alert('An uxpected error occurred');
          console.log(error);
      });
  }

  deletePost(post) {
      this.service.deletePost(345)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
      }, (error: AppError) => {
          if(error instanceof NotFoundError){
            alert('This post has already beend deleted');
          }
          else {
            alert('An unexpected error occurred.');
            console.log(error);
          }
         
      });
  }

}
