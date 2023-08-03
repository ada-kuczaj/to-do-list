{
    const tasks = [
        {
            content: "Walk the dog",
            done: false,
        },
        {
            content: "Do the laundry",
            done: true,
        },
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
            done: false,
        });
        render();
    };

    const removeTask = (indexOfTask) => {
        tasks.splice(indexOfTask, 1);
        render();
    };

    const toggleTaskDone = (indexOfTask) => {
        tasks[indexOfTask].done = !tasks[indexOfTask].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, indexOfTask) => {
            removeButton.addEventListener("click", () => {
                removeTask(indexOfTask);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, indexOfTask) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(indexOfTask);
            });
        });
    };

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
                <li class="list_item${task.done ? " list__item--done" : ""}">
                    <button class="js-done">Done?</button>   
                     ${task.content}
                    <button class="js-remove">Delete task</button>
                </li>
                `;
        }

        document.querySelector(".js-tasksList").innerHTML = htmlString;
        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);

    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };

    init();

}