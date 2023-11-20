import { Routes, Route } from 'react-router-dom'
import { Principal } from '../pages/principal'

export const MainRoute = () => {
  return(
    <Routes>
      <Route path='/' element= {<Principal />} />
    </Routes>
  )
}