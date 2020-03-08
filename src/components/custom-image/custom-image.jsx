import React from 'react'
import "./custom-image.css"

const CustomImage = ({src, isImage, ...rest}) => {

    let Image = () => {
        return isImage === true ? <img src={src} {...rest}/> :
            <div style={{backgroundImage: `url("${src}")`}} {...rest}></div>
    }

    return (
        Image()
    )

}

export default CustomImage
