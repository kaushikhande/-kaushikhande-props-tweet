import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar" />
  );
}

function Message() {
  return (
    <div className="message">
      This is less than 140 characters.
    </div>
  );
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Your Name</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
}

const Time = () => (
  <span className="time">3h ago</span>
);

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
);

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle /><Time/>
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(
  <React.StrictMode>
    <Tweet />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
