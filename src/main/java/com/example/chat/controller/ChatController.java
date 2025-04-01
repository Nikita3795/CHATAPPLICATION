package com.example.chat.controller;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/messages") // ✅ This is important
@CrossOrigin(origins = "http://localhost:4200") // Allow Angular frontend
public class ChatController {

    private final List<Message> messages = new ArrayList<>();

    @GetMapping
    public List<Message> getMessages() {
        return messages; // Return stored messages
    }

    @PostMapping
    public String sendMessage(@RequestBody Message message) {
        messages.add(message); // Store message
        return "Message sent!";
    }

    @DeleteMapping
    public String clearMessages() {
        messages.clear(); // Delete all messages
        return "All messages deleted!";
    }
}

// ✅ Message Model (Create a new class)
class Message {
    private String sender;
    private String content;

    public String getSender() { return sender; }
    public void setSender(String sender) { this.sender = sender; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
}
