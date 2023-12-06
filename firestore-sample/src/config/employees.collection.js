import {
  collection,
  doc,
  getDocs,
  writeBatch,
  runTransaction,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
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

const getDocumentFromFirstName = async (firstName) => {
  const q = query(employeesCollection, where("firstName", "==", firstName));
  const querySnapshot = await getDocs(q);
  const docId = querySnapshot.docs.map((snapshot) => ({
    id: snapshot.id,
    ...snapshot.data(),
  }))[0];
  return docId;
};

export const changeSalaryTypeOfAllRecords = async () => {
  const firstNames = employeesData.map((e) => e.firstName);

  for (let firstName of firstNames) {
    try {
      const document = await getDocumentFromFirstName(firstName);
      const documnetRef = doc(employeesCollection, document.id);
      await updateDoc(documnetRef, { salary: +document.salary / 10 });
      console.log("Update done");
    } catch (error) {
      console.log(error.message);
    }
  }

  // firstNames.forEach((firstName) => {
  //   runTransaction(firestore, async (transaction) => {
  //     const q = query(employeesCollection, where("firstName", "==", firstName));

  //     const querySnapshot = await getDocs(q);

  //     let docId;
  //     querySnapshot.forEach((doc) => {
  //       docId = doc.id;
  //     });

  //     const docRef = doc(employeesCollection, docId);

  //     const fullDocContent = await transaction.get(docRef);

  //     transaction.update(docRef, {
  //       ...fullDocContent.data(),
  //       salary: +fullDocContent.data().salary,
  //     });
  //   }).catch((err) => {
  //     console.log(err.message);
  //   });
  // });
};
