import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { ACTIONS, API, LIMIT } from "../utils/consts";
import { useSearchParams } from "react-router-dom";

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
  pod: {},
  search: "",
  dish: null,
  pageTotalCount: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.pods:
      return { ...state, pods: action.payload };
    case ACTIONS.pod:
      return { ...state, pod: action.payload };
    case ACTIONS.dish:
      return { ...state, dish: action.payload };
    case ACTIONS.pageTotalCount:
      return { ...state, pageTotalCount: action.payload };
    case ACTIONS.search:
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

const MainContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);
  const [pods, setPods] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("_page") || 1);

  async function getPods() {
    try {
      const { data, headers } = await axios.get(
        `${API}${window.location.search}`,
        {
          params: {
            title_like: state.search,
            _page: page,
            _limit: LIMIT,
          },
        }
      );

      console.log(headers);

      const totalCount = Math.ceil(headers["x-total-count"] / LIMIT);
      console.log(headers);
      dispatch({
        type: ACTIONS.pageTotalCount,
        payload: totalCount,
      });

      dispatch({
        type: ACTIONS.pods,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function deletePods(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getPods();
    } catch (e) {
      if (e.response.status === 500) {
        getPods();
      }
      console.log(e);
    }
  }

  async function getOnePods(id) {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch({
        type: ACTIONS.pod,
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
    pods: state.pods,
    pod: state.pod,
    pageTotalCount: state.pageTotalCount,
    search: state.search,
    addPods,
    setPods,
    pods: state.pods,
    getPods,
    deletePods,
    getOnePods,
    editPods,
    page,
    setPage,
  };
  return <mainContext.Provider value={value}>{children}</mainContext.Provider>;
};

export default MainContext;
