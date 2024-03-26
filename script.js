class Todo {
  constructor() {
      this.form = document.querySelector('.todo-form form');
      this.todoTask = this.form.querySelector('.todo-task-input');
      this.desc = this.form.querySelector('.todo-desc');
      this.submitBtn = this.form.querySelector('.submit-btn');
      this.todoTable = document.querySelector('.todo-table-body');
      this.resetBtn = this.form.querySelector('.reset-btn')
      this.clickCount = 0;

      this.addListener();
  }

  addListener() {
      this.submitBtn.addEventListener('click', (event) => {
          event.preventDefault();
          this.addTodo();
      });
  }

  addTodo() {
      this.clickCount++;
      const todo = `
          <td>${this.todoTask.value}</td>
          <td>${this.desc.value}</td>
          <td>
              <button class="remove-todo" onclick="todo.removeTodo(${this.clickCount})">
                  Delete
              </button>
          </td>
      `;

      const tableRow = document.createElement('tr');
      tableRow.setAttribute('id', `todo-${this.clickCount}`);
      tableRow.innerHTML = todo;

      this.todoTable.appendChild(tableRow);
      this.resetBtn.click();
  }

  removeTodo(todo) {
      const selectTodo = document.querySelector(`#todo-${todo}`);
      selectTodo.remove();

  }
}

const todo = new Todo();