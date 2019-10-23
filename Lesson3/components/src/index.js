import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 6:00 PM"
                    comment="I love my kitty!"
                />
                <CommentDetail
                    author="Tyler"
                    timeAgo="Today at 6:15 PM"
                    comment="Your cat is actually a horrible person"
                />
                <CommentDetail
                    author="The Cat"
                    timeAgo="Today at 6:23 PM"
                    comment="I'll never forgive you."
                />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
