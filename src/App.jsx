import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import PostsList from "./pages/PostsList"
import DefaultLayout from './pages/DefaultLayout'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/posts-list' element={<PostsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
