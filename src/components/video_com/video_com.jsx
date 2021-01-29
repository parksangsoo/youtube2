import React from 'react';

const VideoCom = ({ comment }) => {
    return(
        <div>{comment.snippet.topLevelComment.snippet.textDisplay}</div>
    )            
};

export default VideoCom