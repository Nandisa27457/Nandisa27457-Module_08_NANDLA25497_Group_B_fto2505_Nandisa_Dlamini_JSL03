//Array for all tasks
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

//Ask user for the title, description and status of tasks.
for (let i = 4; i <= 6; i++) {
  const tasktitle = prompt(`Enter title for task ${i}:`);
  const taskdescription = prompt(`Enter description for task ${i}:`);

  //Ask for the status of taks and convert it to lowercase.
  task1status = "";
  const task1status = prompt(
    `Enter status for task ${i} (todo, doing, done):`
  ).toLowerCase();
}

// Keep asking until the user enters a valid status for task 1
while (
  task1status !== "todo" &&
  task1status !== "doing" &&
  task1status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1status = prompt(`Enter title for task ${i}:`).toLowerCase();
}

//Creating the task object
const Task = {
  title: tasktitle,
  description: taskdescription,
  status: task1status,
};

//Push task object into array with all tasks

initialTasks.push(Task);

console.log(initialTasks);
