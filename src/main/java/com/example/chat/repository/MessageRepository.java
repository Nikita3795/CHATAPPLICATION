package com.example.chat.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.chat.model.Message;

public interface MessageRepository extends MongoRepository<Message, String> {
}
