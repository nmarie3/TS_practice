import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1'

//this is making an object type
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {   //will get a promise from the api
  const todo = response.data as Todo; //this is referencing the Todo object type which will then catch errors for us

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed); //these have to be in the same order as listed below especially if the types are different or it will error
});

const logTodo = (id: number, title: string, completed: boolean) => { //if you don't add type annotation here it will error when run
  console.log (`The Todo with ID: ${id}
  Has a title of ${title}
  Is it finished ${completed}`)
}

//to compile typescript use: "tsc file_name.ts" in the terminal
//after it compiles run: "node file_name.js" in terminal
//but you can combine these two by running: "ts-node file_name.ts"