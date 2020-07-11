import './css/index.scss';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/miscellaneous/Loading';
import D from './components/miscellaneous/D';

const App = React.lazy(() => import('./components/App'));

let appJsx = (
  <BrowserRouter>
    {/* <Suspense fallback={Loading}> */}
    <Suspense fallback={D}>
      <App />
    </Suspense>
  </BrowserRouter>
);

appJsx = <Loading />;
appJsx = <D />;

ReactDOM.render(appJsx, document.getElementById('root'));
