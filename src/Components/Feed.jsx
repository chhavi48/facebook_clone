import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
const Feed = () => {
  return (
    <div className='feed'>
        <StoryReel/>
        <MessageSender/>
        <Post
        profilePic="https://pbs.twimg.com/profile_images/1451523037040283651/iDf18qJ2_400x400.jpg"
        message="feeling good"
        timestamp="timestamp"
        username="chhavi"
        image="https://pbs.twimg.com/ext_tw_video_thumb/1403911292591611905/pu/img/R3_e8jOvhmhEI5uZ.jpg"/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Feed