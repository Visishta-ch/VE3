import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SearchSlide from './components/ModuleSection/SearchSlide';
import ModuleTour from './components/ModuleTour';
const Module = React.lazy(() => import('./components/Slides/Module'));
const Module2 = React.lazy(() => import('./components/Slides/Module2'));
const Module3 = React.lazy(() => import('./components/Slides/Module3'));
const Module4 = React.lazy(() => import('./components/Slides/Module4'));
const Module5 = React.lazy(() => import('./components/Slides/Module5'));

function App() {
  return (
    <>
      <Suspense>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/module">
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
      </Suspense>
    </>
  );
}

export default App;
