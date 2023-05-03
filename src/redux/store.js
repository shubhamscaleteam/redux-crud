import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { inforamtionReducer } from "./reducer/reducer";

// persist ....!!
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-key",
  storage,
};

const persistedReducer = persistReducer(persistConfig, inforamtionReducer);
const store = createStore(
  persistedReducer,
  (applyMiddleware(thunk))
);


export default store;
