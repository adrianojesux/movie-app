import styled  from 'styled-components';

export const Content = styled.div`
    flex: 1;
    background-color: #EBEBEB;
    height: 20em;
    margin: 1em;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    cursor: pointer;
    transition: .3s ease-in-out;
    text-decoration: none;

    :hover {
        transform: scale(1.01);
    }
`;

export const Thumb = styled.img`
    // flex: 1;
`;

export const Title  = styled.div`
    width: 100%
    max-height: 2em;
    background-color: #116193;
    color: #00E8E4;
    justify-content: left;
    align-items: center;
    padding: .5em;
    display: flex;
    font-family: 'Abel', sans-serif;
    font-size: 36px;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const BodyMovie = styled.div`
    width: 100%;
    height: 100%;
`;

export const Details = styled.div`
    width: 100%;
    margin: 2em 0 .5em .5em;
    padding: 1em 2em;
    font-family: 'Lato', sans-serif;

`;

export const RoundProgress = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border: solid 5px #00E8E4;
    background-color: #116193;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em 1em 0 0;
    font-family: 'Abel', sans-serif;
    font-size: 28px;
`;

export const RowChips = styled.div`
    flex: 1;
    margin: .5em 2em;
`;


export const Chips = styled.span`
    padding: 4px 8px;
    margin: 4px;
    color: #116193;
    background-color: #fff;
    border: solid 2px #116193;
    border-radius: 20px;
    font-family: 'Lato', sans-serif;
`;