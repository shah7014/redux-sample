import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import axios from "axios";
import firestore from "./config";

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

const create = async (todo) => {
  try {
    return addDoc(todosCollection, todo);
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    const querySnapshot = await getDocs(todosCollection);
    return querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (error) {
    throw error;
  }
};

const get = async (id) => {
  try {
    const docRef = doc(todosCollection, id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      throw new Error("Todo not found");
    }
    return { id: docSnap.id, ...docSnap.data() };
  } catch (error) {
    throw error;
  }
};

const update = async (id, data) => {
  try {
    const docRef = doc(todosCollection, id);
    await updateDoc(docRef, data);
  } catch (error) {
    throw error;
  }
};

const remove = async (id) => {
  try {
    const docRef = doc(todosCollection, id);
    await deleteDoc(docRef);
  } catch (error) {
    throw error;
  }
};

export const todos = {
  get,
  getAll,
  create,
  update,
  remove,
  initWithRandomData,
};
