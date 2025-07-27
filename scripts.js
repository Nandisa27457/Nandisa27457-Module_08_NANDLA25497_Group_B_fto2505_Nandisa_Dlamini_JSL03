//Array of all tasks
const AllTasks = [
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

//Loop for user input of title, description and status
for (let i = 4; i <= 6; i++) {
  let task1Title = prompt(`Enter title for task ${i}:`); //task prompt for user
  let task1Description = prompt(`Enter description for task ${i}:`); //description prompt for user

  let task1Status = prompt(
    `Enter status for task ${i} (todo, doing, done):`
  ).toLowerCase(); //status prompt for user.

  //Keep asking until enters a valid status for tasks
  while (
    task1Status !== "todo" &&
    task1Status !== "doing" &&
    task1Status !== "done"
  ) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    task1Status = prompt(
      `Enter task ${i} status (todo, doing, done):`
    ).toLowerCase();
  }

  if (i === 6) {
    alert(
      "There are enough tasks on your board,please check them in the console."
    );
  }
  //creating an object for the user array.
  const Task = {
    id: Number(`${i}`),
    title: task1Title,
    description: task1Description,
    status: task1Status,
  };

  //pushing the created object into the above array.
  AllTasks.push(Task);
}

// Make the array appear in the console.
console.log("All Tasks : ", AllTasks);

// Filter function for objects with a status of done to show in separate array.
function filtercompletedTasks(AllTasks) {
  return AllTasks.filter((task) => task.status === "done");
}

let completedTasks = filtercompletedTasks(AllTasks);

//Console output for completed tasks.
console.log("Completed Tasks: ", completedTasks);
