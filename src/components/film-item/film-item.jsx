import React, {useState, useEffect} from 'react'
import CustomImage from "../custom-image";
import line from "../../assets/line.svg";
import {
    FilmItemStyles,
    FilmInfo,
    TextFilmInfo,
    FilmInfoOpacity,
    TextFilmInfoOpacity,
    FilmCard,
    FilmCardOpacity
} from "./film-item.styles"

const FilmItem = ({filmData, image}) => {
    let topMargin = 390 * (filmData.rating / 10)

    return (
        <FilmItemStyles>
            <CustomImage src={line} className="lineLogo" isImage={true}/>
            <FilmInfo topMargin={topMargin}>
                <TextFilmInfo>{filmData.title}</TextFilmInfo>
            </FilmInfo>

            <FilmInfoOpacity topMargin={topMargin} selected={filmData.selected}>
                <TextFilmInfoOpacity selected={filmData.selected}>{filmData.title}</TextFilmInfoOpacity>
            </FilmInfoOpacity>

            <FilmCard topMargin={topMargin} image={image}/>
            <FilmCardOpacity topMargin={topMargin} selected={filmData.selected}/>
     </FilmItemStyles>
    )
}

export default FilmItem
