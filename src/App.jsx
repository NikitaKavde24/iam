import './App.css'
import { authenticate } from './Services/API/auth/auth.js';
import { useEffect } from 'react';
import { Dashboard } from './Pages';

function App() {
  useEffect(() => {
    authenticate("eamil.com","123")
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
         console.log(error)
        });
  },[])
  return (
    <Dashboard />
  )
}

export default App
