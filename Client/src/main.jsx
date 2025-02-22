import { lazy, Suspense} from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
const App = lazy(() => import('./App.jsx'))
import store from './store/index';
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
  <Suspense>
    <App/>
    <Toaster
      toastOptions={{
        position: 'top-right',
        style : {
          backgroundColor: '#ff9f6b',
          color: 'white',
        },
        // autoClose: 5000,
        // hideProgressBar: false,
        // closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        // progress: undefined,
        // limit: 3,
      }}
    />
  </Suspense>
  </Provider>
  </BrowserRouter>,
)
