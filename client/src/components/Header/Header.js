
import React from 'react'
import './Header.css'
import toast, {Toaster} from 'react-hot-toast'

function Header({ user }) {
  return (
    <header className='header'>
      <div className='logo'>
        <h1>Shortly</h1>
      </div>
      <nav className='nav'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">login</a></li>
          <li><a href="/signup">signup</a></li>
          <button className='btn-logout' onClick={()=>{
      localStorage.clear()
      toast.success("log out successfully")

      setTimeout(()=>{
        window.location.href="/login"
      },
      200)
     }
     } >logout
     </button>

        </ul>
      </nav>
      {user && (
        <div className='user-info'>
          <p>Welcome, {user.fullname}</p>
        </div>
      )}

      <Toaster/>
    </header>
  )
}

export default Header
