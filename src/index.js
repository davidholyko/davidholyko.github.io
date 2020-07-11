import './css/index.scss';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/miscellaneous/Loading';
import Name from './components/miscellaneous/Name';

const App = React.lazy(() => import('./components/App'));

let appJsx = (
  <BrowserRouter>
    {/* <Suspense fallback={Loading}> */}
    <Suspense fallback={Name}>
      <App />
    </Suspense>
  </BrowserRouter>
);

appJsx = <Loading />;
appJsx = <Name />;

ReactDOM.render(appJsx, document.getElementById('root'));
