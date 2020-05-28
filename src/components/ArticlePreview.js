import React from 'react'

const removeUnicode = (string) => {
  if (string.indexOf("&#8217;") >= 0) {
    return removeUnicode(string.replace("&#8217;", "'"));
  } else {
    return string.replace("<p>", "").replace("[&hellip;]</p>", "...");
  }
}

const ArticlePreview = ({ post }) => {
  const excerpt = removeUnicode(post.excerpt)
  return (
    <div className="article">
      <a href={`#/blog/${post.ID}`} className="blackLink">
        {post.featured_image ? (
          <img
            style={{ width: 'auto', height: '300px' }}
            className="img-responsive webpic"
            alt="article header"
            src={post.featured_image}
          />
        ) : (
          ""
        )}
        <h1 className="text-center">{post.title}</h1>
        <div className="content">
          {excerpt}
        </div>
      </a>
    </div>
  )
}

export default ArticlePreview
