
# Console Based Task Manager

This project involves creating a simple task management system where users can add up to three new tasks to an existing task array. Tasks are stored as objects in an array, each with a unique incremental ID. Users will enter task details via prompts, and the system will allow filtering to view only completed tasks. The project focuses on array manipulation, user interaction via prompts and alerts, and console logging for task management.


## Technologies Used

- Javascript
- HTML
- CSS



## Features

- Unique incremental ID for each user input task.
- Validation check for status input.
- Alert feature signalling task board is full.
- Array storing user input in console.
- Function filtering done tasks into separated array.


## Usage/Examples

```javascript
Below are example snippets demonstrating how to use the task management functions in this project:

1. Filter Tasks by Status

javascript

const doneTasks = filterTasksByStatus(tasks, "done");
console.log("✅ Done Tasks:", doneTasks);
```
Add a New Task (example only if function exists)
```javascript
const newTask = {
  taskId: "task4",
  title: "Review Code",
  description: "Go over project for bugs",
  status: "todo"
};

tasks.push(newTask);

 