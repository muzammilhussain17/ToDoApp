package com.application.todoapp.Controller;


import com.application.todoapp.Entity.TodoEntity;
import com.application.todoapp.Repository.todoRepository;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@Controller
@RequiredArgsConstructor
public class controller {

    private final todoRepository todoRepository;

    // ✅ Show all todos
    @GetMapping("/")
    public String homePage(Model model) {
        model.addAttribute("todos", todoRepository.findAll());
        return "index";
    }

    // ➕ Add new todo
    @PostMapping("/add")
    public String addTodo(@RequestParam("title") String title) {
        if (title != null && !title.trim().isEmpty()) {
            TodoEntity todo = new TodoEntity();
            todo.setTitle(title);
            todo.setCompleted(false);
            todoRepository.save(todo);
        }
        return "redirect:/";
    }

    // ✅✅ Toggle complete/incomplete
    @GetMapping("/toggle/{id}")
    public String toggleTodo(@PathVariable("id") Long id) {
        todoRepository.findById(id).ifPresent(todo -> {
            todo.setCompleted(!todo.isCompleted());
            todoRepository.save(todo);
        });
        return "redirect:/";
    }

    // ❌ Delete todo
    @GetMapping("/delete/{id}")
    public String deleteTodo(@PathVariable("id") Long id) {
        todoRepository.deleteById(id);
        return "redirect:/";
    }
}
