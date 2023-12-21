# Todo App Using ContextAPI for handling state

### Steps :-
> 1. Created a file name TodoContext.js to create context, to create the provider of this context and used useContext to consume the created context.
<br><br>
Inside that createdContext we defined all states incluing an array, and some functions which we gonna need for  components

> 2. Created a file name index.js to export all the variable of TodoContext.js

> 3. In App.jsx basically wrapped all jsx with the provider to make the context values available to all components within the wrapped hierarchy. Then added value attribute to access the context provide by the provider.
<br><br>
Created a variable  name todos using useState which is an empty array by default  to store all the individual todo .And by using setTodos method we can update the state of variable todos
<br><br> 
Defined value and defined functionality of the functions of the of the context.











# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
