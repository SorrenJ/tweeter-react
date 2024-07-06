import React from 'react'; //optional

// Old
// function TweetForm(){
//   return (
//     <section className="newtweet">
//     <form method="post" action="/tweets" className="newtweet__form">
//       <textarea className="form__textarea" name="text" placeholder="What are you humming about?"></textarea>
//       <input type="submit" value="Tweet" className="form__input"/>
//       <span className="form__counter">140</span>
//     </form>
//   </section>

//   );
// }

// New
function TweetForm(){
  const charLimit = "140";
  const tweetPlaceholder = "What are you humming about?";

  return (
    <section className="newtweet">
    <form method="post" action="/tweets" className="newtweet__form"  onSubmit={(event) => event.preventDefault()}>
      <textarea className="form__textarea" name="text" placeholder={tweetPlaceholder}></textarea>
      <input type="submit" value="Tweet" className="form__input"/>
      <span className="form__counter">{charLimit}</span>
    </form>
  </section>

  );
}

export default TweetForm;