package com.vaki.todo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class TodoServiceTest {

    @Autowired
    private TodoRepository repo;

    @Test
    void createAndToggle() {
        TodoService service = new TodoService(repo);
        Todo t = service.create("Write tests");
        assertNotNull(t.getId());
        assertFalse(t.isCompleted());
        service.toggle(t.getId());
        Todo updated = repo.findById(t.getId()).orElseThrow();
        assertTrue(updated.isCompleted());
    }
}
