import { collection } from "firebase/firestore";
import firestore from "./config";
import { dbOperations } from "./helpers";

const employeesCollection = collection(firestore, "employees");

const getAll = () => {
  return dbOperations.getAll(employeesCollection);
};

const get = (id) => {
  return dbOperations.get(employeesCollection, id);
};

const create = async (data) => {
  return dbOperations.create(employeesCollection, data);
};

const update = async (id, data) => {
  return dbOperations.update(employeesCollection, id, data);
};

const remove = async (id) => {
  return dbOperations.remove(employeesCollection, id);
};

export const employees = {
  get,
  getAll,
  create,
  update,
  remove,
};
