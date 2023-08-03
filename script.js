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

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
                <li>
                    ${task.content}
                </li>
                `;
        }

        document.querySelector(".js-tasksList").innerHTML = htmlString;
    };


    const init = () => {
        render();
    };

    init();

}