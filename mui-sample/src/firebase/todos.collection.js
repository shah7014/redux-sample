import { collection, doc, writeBatch } from "firebase/firestore";
import axios from "axios";
import firestore from "./config";

const todosCollection = collection(firestore, "todos");

export const initWithRandomTodos = async () => {
  const batch = writeBatch(firestore);

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const todos = response.data
      .slice(0, 10)
      .map((d) => ({ title: d.title, isCompleted: d.completed }));

    console.log(todos);
    todos.forEach((todo) => {
      const docRef = doc(todosCollection);
      batch.set(docRef, todo);
    });

    return batch.commit();
  } catch (error) {
    console.log(error.message);
  }
};
