import { Provider } from 'react-redux';
import { store } from '../store/store';
import { RouterProvider } from 'react-router';
import { router } from '../routes/routes';

export const MainProvider = () => {
  return (
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  );
};