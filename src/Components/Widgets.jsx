import React from 'react'
import "./Widgets.css"
const Widgets = () => {
  return (
    <div className='widget'>
  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmasaischool&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
      width="340"
      height="100%"
      style={{border:"none",overflow:"hidden"}}
      scrolling="no"
      allowTransparency="true"
      allow="encrypted-media"
      frameborder="0"></iframe>
    </div>
  )
}

export default Widgets