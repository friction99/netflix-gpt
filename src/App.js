import './App.css';
import Body from './components/Body';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Browse from './components/Browse';
import appStore from './utils/appStore';
function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }
  ])
  return (
       <Provider store={appStore}>
          <RouterProvider router={appRouter}/>
       </Provider>
  );
}

export default App;
