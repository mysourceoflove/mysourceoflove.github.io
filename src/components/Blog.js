import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ArticlePreview from './ArticlePreview'

const Blog = () => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    axios({
      method:'GET',
      url: 'http://public-api.wordpress.com/rest/v1/sites/mysourceoflove.wordpress.com/posts'
    })
      .then(res => setPosts(res.data.posts))
      .catch(error => console.log(error))
  }, [])

  let postJsx
  if (!posts) {
    postJsx = 'Loading...'
  } else {
    postJsx = posts.map(post => {
      return (
        <ArticlePreview
          key={post.ID}
          post={post}
        />
      )
    })
  }

  return (
    <div className="blog">
      <h1 className="sectionTitle">Articles</h1>
      {postJsx}
    </div>
  )
}

export default Blog
