import React, {useEffect} from 'react'
import CustomImage from "../custom-image";
import starWarsLogo from "../../assets/star_wars_logo.svg";
import {getCharactersStart, sortFilms, getCharacterByIdStart, getFilmsStart, closeModal, setCharacter} from "../../redux/film/film.actions";
import {connect} from "react-redux";
import ScrollMenu from "react-horizontal-scrolling-menu";
import ScrollContainer from 'react-indiana-drag-scroll'
import {
    HeaderStyles,
    HeaderMain,
    HeaderTabs,
    HeaderTabsItem,
    MainIcon,
    PeopleListWrapper,
    PeopleList
} from "./header.styles"

export const ActorItems = (actorList, chooseActor) => {
    return actorList.map((item) => {
        return <CustomImage
            src={item.media[0].src}
            className="humanLogo"
            key={item.id}
            id={item.id}
            onClick={(e) => chooseActor(e)}
            shouldIncrease={item.selected}
        />
    })
}

const Header = ({
                    getFilmsStart,
                    headerSortArray,
                    sortFilms,
                    getCharactersStart,
                    characters,
                    getCharacterByIdStart,
                    closeModal,
                    setCharacter
}) => {
    let sortFilmsList = (sortType) => {
        sortFilms(sortType)
    }

    let getMoviesByCharacter = (id) => {
    }

    useEffect(() => {
        getCharactersStart()
    }, [])

    let chooseActor = (e) => {
        let {id} = e.currentTarget
        setCharacter(id)
        closeModal()
        getCharacterByIdStart(id)
    }

    return (
        <HeaderStyles>
            <HeaderMain>
                <HeaderTabs>
                    {
                        headerSortArray.map(item => <HeaderTabsItem style={{opacity: item.selected ? 1 : 0.5}}
                                                          onClick={() => sortFilmsList(item.value)}>{item.value}</HeaderTabsItem>)
                    }
                </HeaderTabs>
                <MainIcon onClick={getFilmsStart}>
                    <CustomImage src={starWarsLogo} id="starWarsLogo" alt="StarWarsLogo"/>
                </MainIcon>
                <PeopleListWrapper>
                        <ScrollContainer horizontal={true} className="headerScrollBar">
                            {ActorItems(characters, chooseActor)}
                        </ScrollContainer>
                </PeopleListWrapper>
            </HeaderMain>
        </HeaderStyles>
    )
}

const mapDispatchToProps = dispatch => ({
    getFilmsStart: () => dispatch(getFilmsStart()),
    sortFilms: (sortType) => dispatch(sortFilms(sortType)),
    getCharactersStart: () => dispatch(getCharactersStart()),
    getCharacterByIdStart: (id) => dispatch(getCharacterByIdStart(id)),
    closeModal: () => dispatch(closeModal()),
    setCharacter: (id) => dispatch(setCharacter(id))
})

const mapStateToProps = state => ({
    headerSortArray: state.films.headerSortArray,
    characters: state.films.characters
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)