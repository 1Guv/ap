import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  plates: any;
  plates2: any;
  users: any;

  url = 'http://www.apnaplates.com/plates_for_sales/getAutoSuggestionForPlates';

  constructor(private http: HttpClient, 
    private db: AngularFireDatabase,
    private firestore: AngularFirestore
    ) {
    // this.plates = this.db.list('/apnaplates-8e018');
    // console.log('this.plates', this.plates);

    this.db.list('/users').snapshotChanges().subscribe((data => {
      console.log('data', data);
    }));
    
    console.log('this.plates2', this.plates2);

    console.log('1', this.getUsers());


  }

  getUsers() {
    this.users = this.db.list('/users');
    return this.users;
  }

  public getPlatesViaAPI() {
    console.log('2');
    return this.http.get<any>(this.url);
  }

  public getFirebaseData() {
    return this.firestore.collection('/apnaplates-8e018').snapshotChanges();
  }


}
