package com.vaki.todo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TodoController {
    private record CreateTodoRequest(String title) {}
    private final TodoService service;

    public TodoController(TodoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Todo> list() {
        return service.list();
    }

    @PostMapping
    public ResponseEntity<Todo> create(@RequestBody CreateTodoRequest req) {
        Todo created = service.create(req.title());
        return ResponseEntity.ok(created);
    }

    @PatchMapping("/{id}/toggle")
    public ResponseEntity<Todo> toggle(@PathVariable Long id) {
        return ResponseEntity.ok(service.toggle(id));
    }
}
