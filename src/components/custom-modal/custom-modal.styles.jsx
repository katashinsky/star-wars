import styled from 'styled-components';

export const CustomModalStyles = styled.div`
    width: 1000px;
    height: 1500px;
    margin: auto;
    margin-bottom: 100px;

    position: relative;
`;

export const FilmPreview = styled.div`
    width: 294px;
    height: 370px;

    position: absolute;
    top: -50px;
    left: calc(50% - 147px);

    border: 1px solid #FFFFFF;
    background-image: url(${(props) => props.movieImage});
    background-size: 294px 370px;
    z-index: ${({isFilmPreview}) => isFilmPreview ? 1 : 0};
`;

export const ModalHeader = styled.div`
    width: 100%;
    height: 10%;
`;

export const ModalBody = styled.div`
    width: 100%;
    height: 90%;
`;

export const FilmDescription = styled.div`
    width: 100%;
    height: 60%;

    background-color: white;
`;
