package com.application.todoapp;




import com.application.todoapp.Controller.controller;
import com.application.todoapp.Entity.TodoEntity;
import com.application.todoapp.Repository.todoRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class TodoControllerUnitTest {

    @Mock
    private todoRepository todoRepository;

    @InjectMocks
    private controller todoController;

    private TodoEntity sample;

    @Test
    void addTodo_withNullTitle_doesNotSaveTodo() {
        String view = todoController.addTodo(null);
        assertEquals("redirect:/", view);
        verify(todoRepository, never()).save(any());
    }

    @Test
    void toggleTodo_savesToggledEntityState() {
        sample.setCompleted(false);
        when(todoRepository.findById(1L)).thenReturn(Optional.of(sample));

        todoController.toggleTodo(1L);

        // It should now be true after toggling
        assertTrue(sample.isCompleted());
        verify(todoRepository).save(sample);
    }

    @Test
    void deleteTodo_multipleCalls_verifyCount() {
        todoController.deleteTodo(1L);
        todoController.deleteTodo(1L);
        verify(todoRepository, times(2)).deleteById(1L);
    }}

