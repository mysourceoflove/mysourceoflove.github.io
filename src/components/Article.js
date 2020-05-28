import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Article = (props) => {
  const [post, setPost] = useState(null)

  useEffect(( ) => {
    axios
      .get("http://public-api.wordpress.com/rest/v1/sites/mysourceoflove.wordpress.com/posts/" + props.match.params.id )
      .then(res => setPost(res.data))
      .catch(error => console.log(error))
  }, [])

  let articleJsx
  if (!post) {
    articleJsx = 'Loading...'
  } else (
    articleJsx = (
      <div className="blog">
          <div className="article">
            {post.featured_image ? (
              <img
                className="img-responsive webpic"
                alt="article header"
                src={post.featured_image}
              />
            ) : (
              ""
            )}
            <h1 className="text-center">{post.title}</h1>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
    )
  )


  return (
    <div className="article">
      {articleJsx}
    </div>
  )
}

export default Article
