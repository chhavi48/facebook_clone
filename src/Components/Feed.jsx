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
        message="Moving Car with HTML and Css"
        timestamp="9:34am"
        username="chhavi Srivastva"
        image="https://pbs.twimg.com/ext_tw_video_thumb/1403911292591611905/pu/img/R3_e8jOvhmhEI5uZ.jpg"/>

        <Post
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2NHE6v1bFtObujTU0W4sJN9hz22WlHxNEyWR1V6HQWkHG1VGwQ89HgP7ztntcxkpWRY&usqp=CAU"
        message="coding time ........👽"
        timestamp="timestamp"
        username="Tina"
        image="https://images.unsplash.com/photo-1617471346061-5d329ab9c574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwY29kZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
    
    <Post
        profilePic="https://pbs.twimg.com/profile_images/1451523037040283651/iDf18qJ2_400x400.jpg"
        message="😊😉"
        timestamp="9:34am"
        username="chhavi Srivastva"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWnY7zuUcjK_QmfvvPNIxnmKDStICH111XuQ&usqp=CAU"/>
    </div>
  )
}

export default Feed