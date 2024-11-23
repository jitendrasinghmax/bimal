import { RecoilRoot } from 'recoil'
import './App.css'
import Layout from './layout/layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import Cart from './pages/cart'

function App() {
  return (
    <>
      <BrowserRouter>
        <RecoilRoot>
            <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}></Route>
                <Route path='mycart' element={<Cart/>}></Route>
            </Route>
            </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </>
  )
}

export default App
