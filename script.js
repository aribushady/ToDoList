var todos = [
	"clean room",
	"brush teeth",
	"exerise",
	"study javascript",
	"eat healthy"
];

// var todosLength = todos.length;
// for(var i = 0; i < todosLength; i++) {
// 	todos[i] = todos[i] + "!";
// }

// for(var i = 0; i < todosLength; i++) {
// 	todos.pop();
// }

// var counter = 0;
// while(counter < 10) {
// 	console.log(counter);
// 	counter++;
// }

// var count = 10;
// do {

// 	console.log(count);
// 	count--;

// }while(count > 0);


//forEach example 1
// todos.forEach(function(todo, i) {
// 	console.log(todo, i);
// })

//forEach example 2
function logTodos(todo, i) {
	console.log(todo, i);
}
todos.forEach(logTodos);