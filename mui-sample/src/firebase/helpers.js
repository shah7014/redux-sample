import {
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const getAll = async (collectionRef) => {
  try {
    const querySnapshot = await getDocs(collectionRef);
    return querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (error) {
    throw error;
  }
};

const get = async (collectionRef, id, errorMessage) => {
  try {
    const docRef = doc(collectionRef, id);
    const docSnapshot = await getDoc(docRef);
    if (!docSnapshot.exists()) {
      throw new Error(errorMessage);
    }
    return { id: docSnapshot.id, ...docSnapshot.data() };
  } catch (error) {
    throw error;
  }
};

const create = async (collectionRef, data) => {
  try {
    return await addDoc(collectionRef, data);
  } catch (error) {
    throw error;
  }
};

const update = async (collectionRef, id, data) => {
  try {
    const docRef = doc(collectionRef, id);
    await updateDoc(docRef, data);
  } catch (error) {
    throw error;
  }
};

const remove = async (collectionRef, id) => {
  try {
    const docRef = doc(collectionRef, id);
    await deleteDoc(docRef);
  } catch (error) {
    throw error;
  }
};

export const dbOperations = {
  get,
  getAll,
  create,
  update,
  remove,
};
