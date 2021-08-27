import { Home } from "./pages/Home";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { NewRoom } from "./pages/NewRoom";
import {AuthContextProvider} from './contexts/AuthContexts';
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

function App() {

  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/rooms/new" component={NewRoom}></Route>
          <Route path="/rooms/:id" component={Room}></Route>
          <Route path="/admin/rooms/:id" component={AdminRoom}></Route>
      </Switch>
    </AuthContextProvider>
    </BrowserRouter>
    );
}

export default App;
