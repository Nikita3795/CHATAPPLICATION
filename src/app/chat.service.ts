import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:8080/api/messages';
  private socketUrl = 'ws://localhost:8080/chat';

  private messagesSubject = new Subject<{ sender: string; content: string }>();
  private socket: WebSocket;

  constructor(private http: HttpClient) {
    this.socket = new WebSocket(this.socketUrl);
    this.socket.onmessage = (event) => {
      this.messagesSubject.next(JSON.parse(event.data));
    };
  }

  sendMessage(sender: string, content: string) {
    this.socket.send(JSON.stringify({ sender, content }));
  }

  getMessages(): Observable<{ sender: string; content: string }> {
    return this.messagesSubject.asObservable();
  }

  fetchMessageHistory(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
