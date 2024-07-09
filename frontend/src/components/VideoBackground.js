import React, { useState, useEffect } from "react";


const VideoBackground = (props) =>{

    const video_file = props.video_file;

    return (
        <div>
            {video_file}
        </div>
    )
}

export default VideoBackground;