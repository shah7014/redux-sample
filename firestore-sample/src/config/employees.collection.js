import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import firestore from "./firebase";
import { employeesData } from "../mocks/data";

export const employeesCollection = collection(firestore, "employees");

export const getAllEmployees = () => {
  return getDocs(employeesCollection);
};

// batch write to initialize the employees collection
export const initializeEmployeesCollection = () => {
  const batch = writeBatch(firestore);

  const employees = employeesData.map((e) => {
    const { id, ...rest } = e;
    return { ...rest };
  });

  employees.forEach((e) => {
    const docRef = doc(employeesCollection);
    batch.set(docRef, e);
  });

  batch.commit().then(() => console.log("DONE"));
};

export const chnageSalaryTypeOfAllRecords = () => {};
