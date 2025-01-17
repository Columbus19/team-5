import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Dev {
  id: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  developers = new BehaviorSubject([]);
  products = new BehaviorSubject([]);

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'fab4.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
        });
    });
  }

  seedDatabase() {
    this.http.get('assets/fab4.sql', { responseType: 'text' })
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(_ => {
            this.loadDevelopers();
            this.dbReady.next(true);
          })
          .catch(e => console.error(e));
      });
  }

  loadDevelopers() {
    return this.database.executeSql('SELECT * FROM MAIN_FAB4 WHERE ClientID = 1')
  }

  getClient(id) {
    return this.database.executeSql('SELECT ClientName FROM MAIN_FAB4 WHERE ClientId = ?', [id]).then(data => { });
  }

  getAddress(id) {
    return this.database.executeSql('SELECT Address FROM MAIN_FAB4 WHERE ClientId = ?', [id]).then(data => { });
  }

  getPhoneNumber(id) {
    return this.database.executeSql('SELECT PhoneNumber FROM MAIN_FAB4 WHERE ClientId = ?', [id]).then(data => { });
  }

  getTotalDebt(id) {
    return this.database.executeSql('SELECT TotalDebt FROM MAIN_FAB4 WHERE ClientId = ?', [id]).then(data => { });
  }

  getMonthlyPayment(id) {
    return this.database.executeSql('SELECT MonthlyPayment FROM MAIN_FAB4 WHERE ClientId = ?', [id]).then(data => { });
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }

  getDevs(): Observable<Dev[]> {
    return this.developers.asObservable();
  }

  getProducts(): Observable<any[]> {
    return this.products.asObservable();
  }
}