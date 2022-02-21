import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  arrPost: Post[];
  arrCategories: Category[];

  constructor(
    private postService: PostsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.arrPost = new Array();
    this.arrCategories = new Array();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let url = params['categoryTitle'];
      
      if(url){
        this.arrPost = this.postService.filterCategory(url);
      } else {
        this.arrPost = this.postService.getAllPost();
      }
    });

    this.arrCategories = this.postService.getAllCategories();
  }

  filterCategory($event: any): void{
    if($event.target.value !== ''){
      this.router.navigate(['/category', $event.target.value]);
    } else {
      this.router.navigate(['/home']);
    }
  }

}
