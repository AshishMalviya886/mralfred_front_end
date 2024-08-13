import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { CreatePost, GetPostById, UpdatePostById } from 'src/app/store/actions/user.action';
import { getPostById } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  addPostForm: FormGroup;
  isSubmitted: boolean = false;
  postId:string = '';
  title:string = 'Add Post';

  constructor( private dialogRef: MatDialogRef<AddPostComponent>,private fb:FormBuilder,private store:Store,@Inject(MAT_DIALOG_DATA) public dialogData: any,){
    this.addPostForm = this.fb.group({
      title: ['',[Validators.required]],
      description: ['',[Validators.required]]
    })
    if (this.dialogData) {
      this.title = 'Update Post'
      this.postId = this.dialogData.postId;
      this.patchForm();
    }
  }

  ngOninit(){
  }

  addPost(){
    this.isSubmitted = true;
    if(this.addPostForm.valid){
      const { title, description } = this.addPostForm.value;
      if(this.postId !== ''){
        this.store.dispatch(UpdatePostById({id:this.postId,title:title,description:description}));
      } else {
        this.store.dispatch(CreatePost({title:title,description:description}));
      }
      this.addPostForm.reset();
      this.dialogRef.close("success");
    }
  }

  patchForm(){
    this.store.dispatch(GetPostById({id:this.postId}));
    this.store.select(getPostById).subscribe((data)=>{
      if(data){
        this.addPostForm.patchValue({
          title: data.title,
          description: data.description
        })
      }
    })
  }

  cancel(){
    this.dialogRef.close("success");
  }
}
