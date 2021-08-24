import { Home } from "./pages/Home";
import {BrowserRouter, Route} from 'react-router-dom';
import { NewRoom } from "./pages/NewRoom";
import {AuthContextProvider} from './contexts/AuthContexts';

function App() {

  return (
    <BrowserRouter>
    <AuthContextProvider>
        <Route path="/" exact component={Home}></Route>
        <Route path="/rooms/new" component={NewRoom}></Route>
    </AuthContextProvider>
    </BrowserRouter>
    );
}

export default App;
