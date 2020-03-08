import styled from 'styled-components';

let FontMixin = styled.span`
    font-family: Oswald;
    font-style: normal;
    font-weight: 200;
    text-align: center;
`

export const AboutFilm = styled.div`
    width: 100%;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;
`;

export const DescBloc = styled.div`
    width: 60%;
    min-height: 90%;
`;

export const FilmName = styled(FontMixin)`
    min-width: 100%;
    height: 80px;
    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 40px;
    letter-spacing: -0.513889px;

    color: #1DC832;
`;

export const CommonInfo = styled.div`    
    width: 60%;
    height: 80px;
    margin-top: 20px;
    padding-right: 20%;
    padding-left: 20%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CommonInfoItem = styled(FontMixin)`
    width: auto;
    height: 65px;
    
    font-size: 44px;
    line-height: 65px;

    letter-spacing: -0.305556px;

    color: #4B5172;
`;

export const FilmInfo = styled.div`
    width: 100%;
    min-height: 50%;

    margin-top: 20px;
    text-align: center;
`;
export const FilmInfoItem = styled.span`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 36px;

    color: #212121;
`;


