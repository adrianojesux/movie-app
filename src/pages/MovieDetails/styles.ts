import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    height: 4em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #EBEBEB;
    padding: .5em 2em;
`;

export const Title = styled.h1`
    font-family: 'Abel', sans-serif;
    font-weight: normal;
    font-size: 36px;
    color: #116193;
`;

export const Date = styled.h1`
    font-family: 'Abel', sans-serif;
    font-weight: normal;
    font-size: 18px;
    color: #c6c6c6;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-directio: row;
    background-color: #F2F2F2;
`;

export const Poster = styled.img`
    width: 400px;
    flex: 1;
`;

export const MovieBody = styled.div`
    height: 100%:
    flex: 1;
    padding: 2em;
`;

export const TitleSession = styled.div`
    width: 100%;
    font-family: 'Abel', sans-serif;
    border-bottom: solid 2px #00E8E4;
    font-size: 22px;
    color: #116193;
    padding: .2em 0;
    margin: 1em 0;
`

export const Text = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    line-height: 21px;
    color: #666;
`;

export const RoundProgress = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: solid 5px #00E8E4;
    background-color: #116193;
    display: flex;
    justify-content: center;
    align-items: center;
    // margin: 2em 1em 0 0;
    font-family: 'Abel', sans-serif;
    font-size: 32px;
    color: #00E8E4;
`;

export const RowChips = styled.div`
    flex: 1;
    margin: 2em 0;
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