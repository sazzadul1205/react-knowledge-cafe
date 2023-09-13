import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import Blogs from './Components/blogs.jsx/Blogs'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

    const handleAddToBookmarks = blog =>{
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    }
    const handleMarkAsRead = (id ,time) =>{
        const newReadingTime = readingTime + time;
        setReadingTime(newReadingTime)
        // remove the red blogs from books
        const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
        setBookmarks(remainingBookmarks)
        
    }


  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
