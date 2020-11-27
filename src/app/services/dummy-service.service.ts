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


  getUserProfile(id : String) : Observable<any>{


    //set header with key
    let header = new HttpHeaders();
    header = header.set("app-id",this.headerKey );
  
    return this.http
    .get(this.baseUrl + "user/" + id, { observe: 'response', headers: header })
    // .get("assets/userDetail.sample", { observe: 'response', headers: header})
  }

  getPostList(pages:number, category:string)  : Observable<any>{
    let urlCategory = "";
    const params = new HttpParams()
    .set('limit', "10")
    .set('page', pages.toString())

    //set header with key
    let header = new HttpHeaders();
    header = header.set("app-id",this.headerKey );

    //if category exist
    if(category != null && category != "" ){
      urlCategory = "tag/" + category + "/";
    }
  
    //TODO:change from localhost
    return this.http
    // .get(this.baseUrl + urlCategory + "post", { observe: 'response', headers: header, params: params })
    .get("assets/postList.sample", { observe: 'response', headers: header, params: params })
  }

  getUserPost(pages:number,id :String | null ) : Observable<any>{
    const params = new HttpParams()
    .set('limit', "10")
    .set('page', pages.toString())

    //set header with key
    let header = new HttpHeaders();
    header = header.set("app-id",this.headerKey );

   
    //TODO:change from localhost
    return this.http
    // .get(this.baseUrl + "user/"  + id + "/post", { observe: 'response', headers: header, params: params })
    .get("assets/userDetailPosts.sample", { observe: 'response', headers: header, params: params }) 
   }
  getCommentsList(id:String){

  }
  getTagList(){
    
  }
}
