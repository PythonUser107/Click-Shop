import { getApi } from '@/api/api';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [getApi.reducerPath]: getApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getApi.middleware),
});