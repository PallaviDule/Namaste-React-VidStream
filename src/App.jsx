import BodyContainer from "./component/BodyContainer"
import Header from "./component/Header";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
       <Header/>
      <BodyContainer />
    </Provider>
  )
}

export default App
