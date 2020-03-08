import React from 'react'
import {
    AboutFilm,
    DescBloc,
    FilmName,
    CommonInfo,
    CommonInfoItem,
    FilmInfo,
    FilmInfoItem
} from './description-block.styles'

const DescriptionBlock = ({filmName = "", year = "", rating = "", duration = "", filmInfo = ""}) => {
    return (
        <AboutFilm>
            <DescBloc>
                <FilmName>{filmName.toUpperCase()}</FilmName>
                <CommonInfo>
                    <CommonInfoItem>{year}</CommonInfoItem>
                    <CommonInfoItem>{rating}</CommonInfoItem>
                    <CommonInfoItem>{duration}</CommonInfoItem>
                </CommonInfo>
                <FilmInfo>
                    <FilmInfoItem>{filmInfo}</FilmInfoItem>
                </FilmInfo>
            </DescBloc>
        </AboutFilm>
    )
}

export default DescriptionBlock
