package com.vaki.todo;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class TodoService {
    private final TodoRepository repo;

    public TodoService(TodoRepository repo) {
        this.repo = repo;
    }

    public List<Todo> list() {
        return repo.findAll();
    }

    public Todo create(String title) {
        if (title == null || title.isBlank()) {
            throw new IllegalArgumentException("Title must not be blank");
        }
        return repo.save(new Todo(title.trim()));
    }

    @Transactional
    public Todo toggle(Long id) {
        Todo t = repo.findById(id).orElseThrow();
        t.toggle();
        return t;
    }
}
