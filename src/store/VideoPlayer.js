import React, { useState, useEffect } from 'react'

const videos = {
    video1: 'https://res.cloudinary.com/elpawl-llc/video/upload/v1679873411/pexels-kelly-lacy-6606214_1_gcflle.mp4',
    video2: 'https://res.cloudinary.com/elpawl-llc/video/upload/v1679873412/pexels-jeremy-bishop-3683309_djq6z9.mp4',
}

function VideoPlayer(props) {
    const { videoId } = props
    const videoUrl = videos[videoId]
    const [nextVideoId, setNextVideoId] = useState(null)

    useEffect(() => {
        const handleVideoEnd = () => {
            if (nextVideoId) {
                setNextVideoId(null)
            }
        }

        const videoElement = document.querySelector('video')
        videoElement.addEventListener('ended', handleVideoEnd)

        return () => {
            videoElement.removeEventListener('ended', handleVideoEnd)
        }
    }, [nextVideoId])

    useEffect(() => {
        const keys = Object.keys(videos)
        const currentIndex = keys.indexOf(videoId)
        const nextIndex = currentIndex < keys.length - 1 ? currentIndex + 1 : 0
        setNextVideoId(keys[nextIndex])
    }, [videoId])

    return (
        <div
            style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}
        >
            <video
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
                autoPlay
                muted
                controls
            >
                <source src={videoUrl} type="video/mp4" />
            </video>
            {nextVideoId && <VideoPlayer videoId={nextVideoId} />}
        </div>
    )
}

export default VideoPlayer
