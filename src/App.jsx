import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import Blogs from './Components/blogs.jsx/Blogs'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
