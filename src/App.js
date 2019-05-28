import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import My from './pages/my/my';
import Home from './pages/home/home';
import Friend from './pages/friend/friend';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/my" component={My} />
          <Route exact path="/friend" component={Friend} />
        </Switch>
      </div>
    )
  }
}
export default App;
