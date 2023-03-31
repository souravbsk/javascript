function generateId() {

    return Math.random().toString(36).substring(2) +
        (new Date()).getTime().toString(36);
}

document.getElementById('todoFrom').addEventListener("submit", (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    const id = generateId();
    const todoInfo = { name, email, subject, message, id };
    setLocalStorage(todoInfo)
})

const displayData = (details) => {
    const { email, message, name, subject, id } = details;
    const todosContainer = document.getElementById("todos-container");

    todosContainer.innerHTML += `
   
   <div class="bg-slate-300 px-6 py-6 rounded-2xl">
   <h3 class="text-2xl font-medium">${name}</h3>
   <p class="text-lg font-medium">${email}</p>
   <p class="text-lg font-medium">${subject}</p>
   <p class="text-lg">${message?.length > 20 ? message.slice(0, 20) + "..." : message}</p>
   <div class="flex mt-4 items-center justify-between">
       <button class=" text-xl"><i class="fa-solid fa-pen-to-square"></i></button>
       <button onclick="removeTodoItem('${id}')" class=" text-xl"><i class="fa-solid fa-trash"></i></button>
   </div>
</div>
   
   `
}

