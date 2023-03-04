import React from 'react'
import YouTube from 'react-youtube'
import styles from './styles/video.module.css'
const VideoContent = () => {
  return (
    <div className={styles.videoContent}>
                <div className={styles.headerVideo}>
                    <h1>YOUTUBE</h1>
                    <p>ac urna vestibulum tristique egestas auctor. vestibulum ac urna vestibulum tristique egestas auctor. vestibulum tristique egestas auctoLorem ipsum dolor sit amet</p>
                </div>
                <div>
                    <YouTube
                    videoId={"1Q3uUbzo2UE"}
                    opts={{
                        height: "390",
                        width: "640",
                        playerVars: {
                          autoplay: 1
                        },
                    }}
                    />
                </div>
            </div>
  )
}

export default VideoContent