import { Outlet } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <Outlet />
  )
}

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/contacts',
//     element: <ContactList />
//   }
// ]);


// export default App;
