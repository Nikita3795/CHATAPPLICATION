import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true, // ✅ Mark as standalone
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  imports: [CommonModule, FormsModule] // ✅ Correct placement of imports
})
export class ChatComponent {
  sender = '';
  newMessage = '';
  messages: { sender: string; content: string }[] = [];

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ sender: this.sender || 'Anonymous', content: this.newMessage });
      this.newMessage = '';
    }
  }
}
