import { Route, Switch } from 'react-router-dom';
import Module from './components/Slides/Module';
import Home from './components/Home';
import SearchSlide from './components/ModuleSection/SearchSlide';
import Module4 from './components/Slides/Module4';
import Module5 from './components/Slides/Module5';
import Module3 from './components/Slides/Module3';
import Module2 from './components/Slides/Module2';
import ModuleTour from './components/ModuleTour';


function App() {
  return (
    <Switch>
      <Route path="/" exact>
    
        <Home />
      </Route>
      <Route path='/module'>
        <ModuleTour />
      </Route>
      <Route path="/module1">
        <Module />
      </Route>
      <Route path="/module2">
        <Module2 />
      </Route>
      <Route path="/module3">
        <Module3 />
      </Route>
      <Route path="/module4">
        <Module4 />
      </Route>
      <Route path="/module5">
        <Module5 />
      </Route>

      <Route path="/searchpage">
        <SearchSlide />
      </Route>
    </Switch>
  );
}

export default App;
