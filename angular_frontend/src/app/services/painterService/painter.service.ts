import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PainterService {
  test_api: string = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  generateImage(prompt: string): Observable<any> {
    console.log(prompt);
    return this.http.post(this.test_api + 'generate-images/', { prompt });
  }

  getCompletion(prompt: string): Observable<any> {
    console.log(prompt);
    return this.http.post(this.test_api + 'ask-openai/', { prompt });

  }
}
