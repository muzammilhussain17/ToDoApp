package com.application.todoapp.Repository;

import com.application.todoapp.Entity.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface todoRepository extends JpaRepository<TodoEntity,Long> {
}
