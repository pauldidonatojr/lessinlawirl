import React from 'react'

const MyComponent = () => {
    const embeddedCode =
        '<iframe src="https://giphy.com/embed/1ipKDVkFDsfYf2sxHP" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/soulpancake-timelapse-philadelphia-fundedinamerica-1ipKDVkFDsfYf2sxHP">via GIPHY</a></p>'

    return <div dangerouslySetInnerHTML={{ __html: embeddedCode }} />
}

export default MyComponent
