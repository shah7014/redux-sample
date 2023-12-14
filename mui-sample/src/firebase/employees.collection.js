import {
  collection,
  endBefore,
  getCountFromServer,
  getDocs,
  limit,
  limitToLast,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
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

const getPaginatedAndSortedEmployees = async (
  pageDirection,
  sortOrder,
  sortByProperty,
  rows,
  state
) => {
  try {
    if (pageDirection === "back") {
      const queryToBeExecuted = query(
        employeesCollection,
        orderBy(sortByProperty, sortOrder),
        limit(rows)
      );
      const querySnapshot = await getDocs(queryToBeExecuted);
      return {
        docs: querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() })),
        lastDoc:
          querySnapshot.docs[querySnapshot.docs.length - 1].data()[
            sortByProperty
          ],
        firstDoc: querySnapshot.docs[0].data()[sortByProperty],
      };
    } else {
      const queryToBeExecuted = query(
        employeesCollection,
        orderBy(sortByProperty, sortOrder),
        startAfter(state.employee.lastVisibleEmployee),
        limit(rows)
      );
      const querySnapshot = await getDocs(queryToBeExecuted);
      return {
        docs: querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() })),
        lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1],
      };
    }
  } catch (error) {
    throw error;
  }
};

const getNextPaginatedData = async (
  cursor,
  itemsPerPage,
  sortOrder,
  sortByProperty
) => {
  try {
    const constraints = [
      orderBy(sortByProperty, sortOrder),
      limit(itemsPerPage),
    ];
    if (cursor) {
      constraints.push(startAfter(cursor));
    }

    const paginatedQuery = query(employeesCollection, ...constraints);

    return getDocs(paginatedQuery);
  } catch (error) {
    throw error;
  }
};
const getPrevPaginatedData = async (
  cursor,
  itemsPerPage,
  sortOrder,
  sortByProperty
) => {
  try {
    const constraints = [
      orderBy(sortByProperty, sortOrder),
      limitToLast(itemsPerPage),
    ];
    if (cursor) {
      constraints.push(endBefore(cursor));
    }

    const paginatedQuery = query(employeesCollection, ...constraints);

    return getDocs(paginatedQuery);
  } catch (error) {
    throw error;
  }
};

const getCountOfEmployees = async () => {
  try {
    const snapshot = await getCountFromServer(query(employeesCollection));
    return snapshot.data().count;
  } catch (error) {
    throw error;
  }
};

const employees = {
  get,
  getAll,
  create,
  update,
  remove,
  getPaginatedAndSortedEmployees,
  getNextPaginatedData,
  getPrevPaginatedData,
  getCountOfEmployees,
};

export default employees;
