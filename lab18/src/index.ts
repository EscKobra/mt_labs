import './scss/style.scss';
import { Todo } from "./models/Todo";
import { TodoRepository } from "./repositories/TodoRepository";
import { ApiTodoRepository } from "./repositories/ApiTodoRepository";

const USER_ID = 5;

document.addEventListener("DOMContentLoaded", () => {
    const repository: TodoRepository = new ApiTodoRepository();
    const form = document.getElementById("todoForm") as HTMLFormElement;
    const list = document.getElementById("todoList") as HTMLElement;
    const template = document.getElementById("task-template") as HTMLTemplateElement;

    async function fetchTodos() {
        try {
            const data = await repository.getAll();
            list.innerHTML = "";
            data.filter(t => t.userId === USER_ID).forEach(task => addTaskToDOM(task));
        } catch (error) {
            console.error("Помилка:", error);
        }
    }

    function addTaskToDOM(task: Todo) {
        const fragment = template.content.cloneNode(true) as DocumentFragment;
        const el = fragment.querySelector(".task-card") as HTMLElement;
        
        if (task.isDone) el.classList.add("task-card--done");
        (el.querySelector(".task-card__title") as HTMLElement).textContent = task.title;
        (el.querySelector(".task-card__desc") as HTMLElement).textContent = task.description;
        
        list.prepend(el);
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const newTask: Todo = {
            userId: USER_ID,
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            tag: formData.get("tag") as string,
            deadline: formData.get("deadline") as string,
            isDone: false
        };

        await repository.add(newTask);
        fetchTodos();
        form.reset();
    });

    fetchTodos();
});