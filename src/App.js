import Header from './components/Header';
import ListUsers from './components/ListUsers';
import Footer from './components/Footer';
import {  Route, Switch } from 'react-router-dom'
import './App.css';
import NotFound from './components/NotFound';
import User from './components/User';

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route exact path="/" component={ListUsers} />
            <Route exact path="/users/:user_id" component={User}/>
            <Route path="*" component={NotFound} />
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
