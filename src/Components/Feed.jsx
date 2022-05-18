import React, { useEffect, useState } from 'react'
// import db from '../firebase'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
const Feed = () => {
  // const[posts,setposts]=useState([]);
  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) => {
  //     setposts(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     );
  //   });
  //   console.log({posts });
  // }, []);
  return (
    <div className='feed'>
        <StoryReel/>
        <MessageSender/>
        {/* {posts.map((post)=>{
         <Post
         key={post.id}
         profilePic={post.data.profilePic}
         message={post.data.message}
         timestamp={post.data.timestamp}
         username={post.data.username}
         image={post.data.username}
         />
        })} */}
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