import styled from 'styled-components';

let TextFilmInfoCommon = styled.span`
    font-family: Oswald;
    font-style: normal;
    font-weight: 200;
    font-size: 21px;
    line-height: 31px;

    letter-spacing: -0.145833px;

    color: #1DC832;
`

let FilmCardCommon = styled.div`
    width: 142px;
    height: 210px;
    position: absolute;
    top: ${({topMargin}) => topMargin}px

    display: flex;
    justify-content: center;
    align-items: center;

`

export const FilmItemStyles = styled.div`
    min-width: 350px;
    overflow-wrap: normal;
    height: 600px;
    margin-left: 14px;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FilmCard = styled(FilmCardCommon)`
    top: ${({topMargin}) => topMargin}px;
    background-image: url(${(props) => props.image});
    background-size: 142px 210px;
    opacity: 1;
`;

export const FilmCardOpacity = styled(FilmCardCommon)`
    top: ${({topMargin}) => topMargin}px;
    background-color: black;
    background-size: 142px 210px;
    opacity: ${({selected}) => selected ? 0 : 0.8};
`;

export const FilmInfo = styled.div`
    width: auto;
    height: 36px;

    position: absolute;
    top: calc(${({topMargin}) => topMargin}px + 200px * 0.8);

    text-align: center;

    background-color: white;

    z-index: 1;
`;

export const TextFilmInfo = styled(TextFilmInfoCommon)`
`;

export const FilmInfoOpacity = styled.div`    
    width: auto;
    height: 36px;

    position: absolute;
    top: calc(${({topMargin}) => topMargin}px + 200px * 0.8);

    text-align: center;

    background-color: black;
    opacity: ${({selected}) => selected ? 0 : 0.8};
    z-index: 1;
}
`;

export const TextFilmInfoOpacity = styled(TextFilmInfoCommon)`
    background-color: black;
    opacity: ${({selected}) => selected ? 0 : 0.8};
`;


