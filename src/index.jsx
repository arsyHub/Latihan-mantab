import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";
//latihan router................................
// import Home from "./Routers/home";
//Api...........................................
// import Api from "./Api/BlogPost/BlogPost";
//Super.........................................
// import AllComponent from "./Super/AllComponent";
// import Header from "./Super/NewsBlog/Header";
import CrHeader from "./Crud/Component/CrHeader";
// import NewsBlog from "./Super/NewsBlog/NewsBlog";

//tamplate
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Redux

const globalState = {
  totalHargas: 0,
};
// Reducer
const rootReducer = (state = globalState, action) => {
  if (action.type === "TOTAL") {
    return {
      ...state,
      totalHargas: action.payload,
    };
  }
  return state;
};
//Sotre
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CrHeader />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
