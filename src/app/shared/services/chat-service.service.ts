import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, tap, catchError, throwError } from 'rxjs';


export interface ChatbotInfo {
  id: number;
  name: string;
  avatar: string | null;
  description?: string;
}

export interface ChatSession {
  session_id: string;
  title: string;
  last_message: string;
  last_message_time: string;
  message_count: number;
  created_at: string;
  source: string;
  ip: string;
  // Campos para el template
  name: string;
  image: string;
  status: string;
  chatMsgUnread: boolean;
  time: string;
  chatbot: ChatbotInfo[];
}

export interface ChatMessage {
  id: number;
  content: string;
  sender: 'user' | 'bot';
  time: string;
  date: string;
  type: string;
}


@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'http://localhost:8000/api/chatbot-conversations';

  constructor(private http: HttpClient) { }

   getConversations(chatbotId: number): Observable<{success: boolean, chatbot_id: number, chatbot: ChatbotInfo, conversations: ChatSession[]}> {
    let params = new HttpParams().set('chatbot_id', chatbotId.toString());
    return this.http.get<{success: boolean, chatbot_id: number, chatbot: ChatbotInfo, conversations: ChatSession[]}>(`${this.apiUrl}/conversations`, { params });
  }

  getSessionMessages(chatbotId: number, sessionId: string): Observable<{success: boolean, session_id: string, chatbot_id: number, messages: ChatMessage[]}> {
    let params = new HttpParams().set('chatbot_id', chatbotId.toString());
    return this.http.get<{success: boolean, session_id: string, chatbot_id: number, messages: ChatMessage[]}>(`${this.apiUrl}/conversations/${sessionId}/messages`, { params });
  }

}
