import './App.css'
import { authenticate } from './Services/API/auth/auth.js';
import { useEffect } from 'react';

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
    <h1 className="text-3xl font-bold underline">
      {import.meta.env.MODE}
    </h1>
  )
}

export default App
