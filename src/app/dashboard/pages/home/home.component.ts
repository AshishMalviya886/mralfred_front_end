import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPostComponent } from '../add-post/add-post.component';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/shared/constants/post';
import { select, Store } from '@ngrx/store';
import { customerlogout } from 'src/app/store/actions/user-auth.actions';
import { getMetaDetails, getPosts } from 'src/app/store/selectors/user.selectors';
import { DeletePost, GetPost } from 'src/app/store/actions/user.action';
import { PaginationMeta } from 'src/app/shared/constants/meta';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedRow: number | null = null;
  posts$!: Observable<Posts[] | null>;
  meta$!: Observable<PaginationMeta | null>;
  currentPage:number = 1;
  totalPages: number[] = [];
  itemsPerPage: number = 10;
  displayedColumns: string[] = ['sno', 'title', 'description', 'created_at', 'actions'];
  dataSource = new MatTableDataSource<Posts>();

  constructor(private dialog: MatDialog,private store:Store){}

  ngOnInit(){
    this.store.dispatch(GetPost({pageNumber:this.currentPage}));
    this.store.pipe(select(getPosts)).subscribe(posts => {
      this.dataSource.data = posts || [];
    });
    this.meta$ = this.store.pipe(select(getMetaDetails))
    this.meta$.subscribe(meta => {
      if (meta) {
        this.currentPage = meta.current_page;
        this.totalPages = this.getPageNumbers(meta);
        this.itemsPerPage = meta.per_page;
      }
    });
  }

  getSerialNumber(index: number): number {
    return (this.currentPage - 1) * this.itemsPerPage + (index + 1);
  }

  addPost() {
    this.dialog.open(AddPostComponent, {
      autoFocus: false,
      disableClose: true,
      width: "50%",
    }).afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  selectRow(index: number, event: MouseEvent) {
    event.stopPropagation();
    this.selectedRow = this.selectedRow === index ? null : index;
  }

  editPost(postId:string | undefined){
    this.dialog.open(AddPostComponent, {
      autoFocus: false,
      disableClose: true,
      width: "50%",
      data: { postId }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.selectedRow = null;
      }
    });
  }

  deletePost(postId:string){
    if(postId){
      this.store.dispatch(DeletePost({id:postId}));
      this.selectedRow = null;
    }
  }

  logout(){
    this.store.dispatch(customerlogout());
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    if (pageNumber) {
      this.store.dispatch(GetPost({pageNumber:this.currentPage}));
    }
  }

  getPageNumbers(meta: PaginationMeta): number[] {
    const pages = [];
    for (let i = 1; i <= meta.last_page; i++) {
      pages.push(i);
    }
    return pages;
  }

}
