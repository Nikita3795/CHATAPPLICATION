import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; // ✅ Import directly
import { ChatComponent } from './chat/chat.component'; // ✅ Import directly

@NgModule({
  imports: [BrowserModule, FormsModule, AppComponent, ChatComponent], // ✅ Use imports, not declarations
  bootstrap: [] // ✅ Keep bootstrap here
})
export class AppModule {}
