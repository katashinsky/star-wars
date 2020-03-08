import styled from 'styled-components';

export const HeaderStyles = styled.div`    
    width: 1vm;
    height: 20%;

    background: linear-gradient(180deg, rgba(31, 100, 39, 0.564878) 6.23%, rgba(0, 0, 0, 0.0001) 100%);
`;

export const HeaderMain = styled.div`    
    width: 1vm;
    height: 50%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTabs = styled.div`    
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const HeaderTabsItem = styled.span`    
    font-family: Oswald;
    font-style: normal;
    font-weight: 200;
    font-size: 26px;
    line-height: 39px;
    color: #FFFFFF;
    padding-left: 30px;
`;

export const MainIcon = styled.div`    
    width: 20%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PeopleListWrapper = styled.div`    
    max-width: 40%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const PeopleList = styled.div`    
    max-width: 80%;
    height: 65px;
`;
