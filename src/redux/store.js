import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import authenticationReducer from "./reducers/Authentication";
import facetsReducer from "./reducers/Facets";
import geospatialReducer from "./reducers/Geospatial";

const persistConfig = {
  key: "root",
  storage,
};

export const store = configureStore({
  reducer: {
    facets: persistReducer(persistConfig, facetsReducer),
    geospatial: geospatialReducer,
    authentication: persistReducer(persistConfig, authenticationReducer),
  },
});

export const persistor = persistStore(store);
