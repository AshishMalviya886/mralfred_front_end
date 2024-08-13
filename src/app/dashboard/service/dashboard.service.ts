import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private api_url = environment.apiURL;
  constructor(private http: HttpClient) { }

  createPost(data:{title:string,description:string}){
    return this.http.post<any>(this.api_url + "posts",data);
  }

  getPost(pageNumber:number){
    return this.http.get<any>(this.api_url + `posts?page=${pageNumber}`);
  }

  getPostById(id:string){
    return this.http.get<any>(this.api_url + `posts/${id}`);
  }

  updatePost(id: string, data: { title: string; description: string; }){
    return this.http.put<any>(this.api_url + `posts/${id}`,data);
  }

  deletePost(id: string){
    return this.http.delete<any>(this.api_url + `posts/${id}`);
  }
}
