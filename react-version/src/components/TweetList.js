import React from 'react';
import Tweet from './Tweet';

const tweets = [
  {
    avatar: "https://i.imgur.com/73hZDYK.png",
    firstName: "Isaac",
    lastName: "Newton",
    handle: "@SirIsaac",
    body: "If I have seen further it is by standing on the shoulders of giants",
    age: "10 days ago"
  },
  {
    avatar: "https://i.imgur.com/nlhLi3I.png",
    firstName: "Michael",
    lastName: "Jackson",
    handle: "@rd",
    body: "Je pense , donc je suis",
    age: "10 days ago"
  }
];

function TweetList() {
  return (
    <section className="tweets">
      {tweets.map((tweety, index) => (
        <Tweet key={index} tweet={tweety} />
      ))}
    </section>
  );
}

export default TweetList;
