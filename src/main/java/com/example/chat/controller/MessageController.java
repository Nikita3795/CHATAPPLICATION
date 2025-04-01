package com.example.chat.controller;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/api/messages", produces = "application/json")
@CrossOrigin(origins = "http://localhost:4200") // Allow frontend access
public class MessageController {

    private final List<String> messages = new ArrayList<>();

    @GetMapping
    public List<String> getMessages() {
        return messages;  // Return chat messages
    }

    @PostMapping
    public String addMessage(@RequestBody String message) {
        messages.add(message);
        return "Message added!";
    }
}
