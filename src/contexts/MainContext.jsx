import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ACTIONS, API, LIMIT } from "../utils/consts";

const mainContext = createContext();
export function useMainContext() {
  return useContext(mainContext);
}

async function addPods(newPod) {
  try {
    await axios.post(API, newPod);
  } catch (e) {
    console.log(e);
  }
}
const init = {
  pods: [],
  dish: null,
  pageTotalCount: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.pods:
      return { ...state, pods: action.payload };
    case ACTIONS.dish:
      return { ...state, dish: action.payload };
    case ACTIONS.pageTotalCount:
      return { ...state, pageTotalCount: action.payload };
    default:
      return state;
  }
}

const MainContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);
  const [pods, setPods] = useState();

  async function getPods() {
    try {
      const { data, headers } = await axios.get(
        `${API}${window.location.search}`,
        {
          params: {
            title_like: state.search,
            rating_like: state.rating,
          },
        }
      );
      const totalCount = Math.ceil(headers["x-total-count"] / LIMIT);
      dispatch({
        type: ACTIONS.pageTotalCount,
        payload: totalCount,
      });
      dispatch({
        type: ACTIONS.pods,
        payload: data,
      });
      dispatch({ type: ACTIONS.products, payload: data });
    } catch (e) {
      console.log(e);
    }
  }
  console.log(state.pods);

  async function addPods(newPod) {
    try {
      await axios.post(API, newPod);
    } catch (e) {
      console.log(e);
    }
  }

  async function deletePods(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getPods();
    } catch (e) {
      console.log(e);
    }
  }

  async function getOnePods(id) {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch({
        type: ACTIONS.pods,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }
  async function editPods(id, newData) {
    try {
      await axios.patch(`${API}/${id}`, newData);
      getPods();
    } catch (e) {
      console.log(e);
    }
  }
  const value = {
    addPods,
    setPods,
    pods: state.pods,
    getPods,
    deletePods,
    getOnePods,
    editPods,
  };
  return <mainContext.Provider value={value}>{children}</mainContext.Provider>;
};

export default MainContext;
