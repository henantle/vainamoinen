package com.vaki.todo;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private boolean completed = false;

    @Column(nullable = false, updatable = false)
    private Instant createdAt = Instant.now();

    protected Todo() {}

    public Todo(String title) {
        this.title = title;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public boolean isCompleted() { return completed; }
    public Instant getCreatedAt() { return createdAt; }

    public void setTitle(String title) { this.title = title; }
    public void toggle() { this.completed = !this.completed; }
}
