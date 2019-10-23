import React from 'react';
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const CommentDetail = props => {
    return (
        <ApprovalCard>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">
                        {props.comment}
                    </div>
                </div>
            </div>
        </ApprovalCard>
    );
};

export default CommentDetail;