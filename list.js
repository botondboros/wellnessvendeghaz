while(input !== "quit"){
    if(input === "list") {
        console.log(todos);
    }else if(input === "new") {
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
    }
    input = prompt("What would you like to do?");
}
console.log("OK, you quit the app.");