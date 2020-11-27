import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DummyServiceService {
  baseUrl = "https://dummyapi.io/data/api/";
  headerKey="5fc0a77b1399640b5f7dfb8d";
  configUrl = "dawdawdwd";
  constructor(private http: HttpClient) { }

  getUsersList() : Observable<any>{
    const params = new HttpParams()
    .set('orderBy', '"$key"')
    .set('limitToFirst', "1");

    let header = new HttpHeaders();
    header = header.set("app-id",this.headerKey );

    //TODO:change from localhost
    return this.http
    // .get(this.baseUrl + "user", { observe: 'response', headers: header })
    .get("assets/userList.sample", { observe: 'response', headers: header })

  }
  getUserProfile(id : String){
    return id;
  }
  getPostList()  : Observable<any>{
    const params = new HttpParams()
    .set('limit', "10")
    .set('page', "0")

    let header = new HttpHeaders();
    header = header.set("app-id",this.headerKey );

    //TODO:change from localhost
    return this.http
    // .get(this.baseUrl + "post", { observe: 'response', headers: header, params: params })
    .get("assets/postList.sample", { observe: 'response', headers: header, params: params })
  }

  getNextPostList(pages:number) : Observable<any>{
    const params = new HttpParams()
    .set('limit', "10")
    .set('page', pages.toString())

    let header = new HttpHeaders();
    header = header.set("app-id",this.headerKey );

    //TODO:change from localhost
    return this.http
    .get(this.baseUrl + "post", { observe: 'response', headers: header, params: params })
    // .get("assets/postList.sample", { observe: 'response', headers: header, params: params })
  }
  getUserPost(id :String){
    return id;
  }
  getCommentsList(id:String){

  }
  getTagList(){
    
  }
  getPostByTag(tagId : String){

  }
}
