import styled from 'styled-components';

export const ActorsList = styled.div`
    width: 100%;
    height: 50%;

    background-color: rgba(63, 58, 67, 0.0408458);
`;

export const FilmCast = styled.div`
    width: 100%;
    height: 30%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FilmCastTitle = styled.span`
    font-family: Oswald;
    font-style: normal;
    font-weight: 200;
    font-size: 44px;
    line-height: 65px;

    text-align: center;
    letter-spacing: -0.305556px;

    color: #4B5172;
`;

export const ActorListItems = styled.div`
    width: calc(100% - 70px);
    height: 70%;
    margin-left: 35px;
    margin-right: 35px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ActorListMain = styled.div`
    width: calc(100% - 210px);
    height: 250px;
`;
