import React from 'react'
import "./custom-image.css"

const CustomImage = ({src, isImage, shouldIncrease, className, ...rest}) => {
    let increase = shouldIncrease ? "increase" : ""

    let Image = () => {
        return isImage === true ? <img src={src} {...rest}/> :
            <div style={{backgroundImage: `url("${src}")`}} className={`${className} ${increase}`} {...rest}></div>
    }

    return (
        Image()
    )

}

export default CustomImage
