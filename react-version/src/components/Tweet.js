
  function Tweet({ tweet }){
  

    return (

      <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src={tweet.avatar} alt={`${tweet.firstName} ${tweet.lastName}`}/>
          <h2 className="tweet--name">{tweet.firstName} {tweet.lastName}</h2>
          <small className="tweet--handle">{tweet.handle}</small>
        </header>
  
        <div className="tweet--body">
          <p>{tweet.body}</p>
        </div>
  
        <footer className="tweet--footer">
          <small className="footer--age">{tweet.age}<small>
              <span className="footer--actions">
                <a href="#"><i className="fa fa-flag"></i></a>
                <a href="#"><i className="fa fa-retweet"></i></a>
                <a href="#"><i className="fa fa-heart"></i></a>'
              </span>
            </small></small></footer>
      </article>
      
  

    );
  }
  
  export default Tweet;