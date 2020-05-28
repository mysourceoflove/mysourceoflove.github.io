import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className="home">
      <h1 className="sectionTitle">Home</h1>
      <Link style={{ color: 'black' }} to={`/blog`}>Blog</Link>
    </div>
  )
}

export default Home
