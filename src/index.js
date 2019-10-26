import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard >
                <CommentDetail  
                    author="sam" 
                    timeAgo="Today at 4:45PM" 
                    blogContent="Great Job!!" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard >
                <CommentDetail 
                    author="Zachary" 
                    timeAgo="Today at 2:00AM" 
                    blogContent="Nice Going" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard >
                <CommentDetail 
                    author="Millard" 
                    timeAgo="Yesterday at 5:00PM" 
                    blogContent="cool blog" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));