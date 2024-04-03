import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  http= inject(HttpClient);
  posts:any=[];

  ngOnInit(): void{
      this.fetchPosts();
  }
  fetchPosts(){
    /**to retrieve posts from the API */
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((posts:any)=>{
      console.log(posts);
    });
  }
}
