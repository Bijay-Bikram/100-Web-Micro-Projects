import { React, useRef } from 'react'
import './VideoPlayer.css'
import collage_video from '../../assets/collage-video.mp4'

const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null)

    const ClosePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false)
        }
    }

    return (
        <div className={`video-player ${playState ? '' : ' hide'} `} onClick={ClosePlayer} ref={player}>
            <video src={collage_video} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer
