import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Issue} from '../models/issue';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {
  private readonly API_URL = 'https://api.github.com/repos/angular/angular/issues';
    
  dataChange: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor(private httpClient: HttpClient) {}

  get data(): Issue[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS
   * 
   * const headers = new HttpHeaders()
            .set("X-CustomHeader", "custom header value");

this.courses$ = this.http
    .get(
        "/courses.json",
        {headers})
   * 

        curl "https://api.airtable.com/v0/app0hohtq4b1nM0Kb/AFToscano?maxRecords=3&view=Main%20View" \
  -H "Authorization: Bearer YOUR_SECRET_API_TOKEN"
   */
  getAllIssues(): void {
    // const API_URL2 = 'https://api.airtable.com/v0/app0hohtq4b1nM0Kb/Issues' 
    const API_URL2 = 'https://airtable.com/app0hohtq4b1nM0Kb/Issues';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer patgbCJgQnURgkXpI.f72c7c10a614e68e2ba92c6e7a437e64312719fe9ad7f7c38b05164dfe445a32'  
      })
      //  'api_key': 'key66fQg5IghIIQmb'  
       // 'x-apikey': '5821f61550e9b39131fe1b6f'  
        // 569a2b87566759cf4b984a50'  // 5821f61550e9b39131fe1b6f
    }

    this.httpClient.get<Issue[]>(this.API_URL2, httpOptions).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);  }
      );
  }

  // DEMO ONLY, you can find working methods below
  addIssue(issue: Issue): void {
    this.dialogData = issue;
  }

  updateIssue(issue: Issue): void {
    this.dialogData = issue;
  }

  deleteIssue(id: number): void {
    console.log(id);
  }
}



/* REAL LIFE CRUD Methods I've used in projects. ToasterService uses Material Toasts for displaying messages:

    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/




