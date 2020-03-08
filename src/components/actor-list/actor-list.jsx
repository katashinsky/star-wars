import React from 'react'
import addLogo from "../../assets/add.svg";
import ProfileBlock from "../profile-block";
import ScrollMenu from "react-horizontal-scrolling-menu";
import {
    ActorsList,
    FilmCast,
    FilmCastTitle,
    ActorListItems,
    ActorListMain
} from './actor-list.styles'

export const ActorItems = (actorList) => {
    return actorList.map((actor) => {
        return <ProfileBlock name={actor.id.slice(0, 8)} key={actor.id} url={actor.media[0].src}/>
    })
}

const ActorList = ({cast}) => {
    return (
        <ActorsList>
            <FilmCast>
                <FilmCastTitle>CAST</FilmCastTitle>
            </FilmCast>
            <ActorListItems>
                <ActorListMain>

                    <ScrollMenu
                        data={ActorItems(cast)}
                        wheel={false}
                    />
                </ActorListMain>
                <ProfileBlock name={"ADD"} url={addLogo}/>
            </ActorListItems>
        </ActorsList>
    )
}

export default ActorList
