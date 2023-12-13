import axios from "axios";
import { collection, doc, writeBatch } from "firebase/firestore";
import firestore from "./config";
import { dbOperations } from "./helpers";

const todosCollection = collection(firestore, "todos");

const initWithRandomData = async () => {
  const batch = writeBatch(firestore);

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const todos = response.data
      .slice(0, 10)
      .map((d) => ({ title: d.title, completed: d.completed }));

    console.log(todos);
    todos.forEach((todo) => {
      const docRef = doc(todosCollection);
      batch.set(docRef, todo);
    });

    await batch.commit();
  } catch (error) {
    throw error;
  }
};

const create = (todo) => {
  return dbOperations.create(todosCollection, todo);
};

const getAll = () => {
  return dbOperations.getAll(todosCollection);
};

const get = (id) => {
  return dbOperations.get(id, "Todo not found");
};

const update = (id, data) => {
  return dbOperations.update(todosCollection, id, data);
};

const remove = (id) => {
  return dbOperations.remove(todosCollection, id);
};

export const todos = {
  get,
  getAll,
  create,
  update,
  remove,
  initWithRandomData,
};
