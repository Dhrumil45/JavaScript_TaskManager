"use strict";

$(document).ready(() => {
  const tasks = [];

  $("#add_task").click(() => {
    const textbox = $("#task");
    const taskInput = textbox.val();

    if (taskInput === "") {
      alert("Please enter a task.");
      textbox.focus();
    } else {
      // Splitting the user's input into an array of tasks
      const latestTasks = taskInput.split(",");

      // For Trimming the whitespace from each task
      const addonTasks = latestTasks.map((task) => task.trim());

      //  Adding Tasks using ForEach Loop
      addonTasks.forEach((task) => {
        tasks.push(task);
      });

      // We can also use Spread operator to add tasks
      // tasks.push(...addonTasks);

      // Clear task text box and re-display tasks
      textbox.val("");
      $("#task_list").val(tasks.join("\n"));
      textbox.focus();
    }
  });

  $("#clear_tasks").click(() => {
    tasks.length = 0;
    $("#task_list").val("");
    $("#task").focus();
  });

  $("#task").focus();
});
