import React from 'react'
import CustomImage from "../custom-image";
import {ActorListItem, ActorName} from "./profile-block.styles"

const ProfileBlock = ({name, url}) => {
    return (
        <ActorListItem>
            <CustomImage src={url} className="cast-actor" alt="humanLogo"/>
            <ActorName>{name}</ActorName>
        </ActorListItem>
    )
}

export default ProfileBlock
