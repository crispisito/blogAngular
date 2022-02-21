import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  newPostForm: FormGroup;
  arrCategories: Category[];
  validate: boolean = false;

  constructor(
    private postService: PostsService,
    private router: Router
  ) { 
    this.newPostForm = new FormGroup({
      title: new FormControl('',[
        Validators.required
      ]),
      text: new FormControl('',[
        Validators.required
      ]),
      image: new FormControl('',[
        Validators.required,
        Validators.pattern(/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/)
      ]),
      category: new FormControl('',[
        Validators.required
      ]),
      date: new FormControl('',[
        Validators.required
      ]),
    }, []);

    this.arrCategories = new Array();
  }

  ngOnInit(): void {
    this.arrCategories = this.postService.getAllCategories();
  }

  getDataForm() {
    if(this.newPostForm.valid) {
      this.postService.newPost(this.newPostForm.value);
      
      this.newPostForm.reset();
      this.validate = false;
      this.router.navigate(['/home']);
    } else {
      this.validate = true;
    }
  }

  changeView(){
    this.validate = false;
  }

  checkControl(pInput: string, pValidation: string): boolean {
    if(this.newPostForm.get(pInput)?.hasError(pValidation) && this.newPostForm.get(pInput)?.touched) {
      return true;
    } 
    return false;
  }

}
