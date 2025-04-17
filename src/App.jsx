import BodyContainer from "./component/BodyContainer"
import Header from "./component/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./component/MainContainer";
import WatchPage from "./component/WatchPage";
import DemoPage from "./component/DemoPage";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <BodyContainer />,
    children : [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: '/watch',
        element: <WatchPage />
      }
    ]
  },{
    path: '/demo',
    element: <DemoPage />
  }
]);

function App() {
  return (
    <Provider store={store}>
       <Header/>
       <RouterProvider router={appRouter} />
       {/* <BodyContainer /> as now we are using Router*/}
    </Provider>
  )
}

export default App
