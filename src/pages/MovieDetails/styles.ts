import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    min-height: 4em;
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
    min-heigth: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    background-color: #F2F2F2;
    overflow: hidden;
`;

export const Video = styled.iframe`
    width: 100%;
    min-height: 600px;
    margin-top: 1em;
    border: none;
`;


export const Poster = styled.img`
    max-width: 400px;
    flex: 1;

    @media (max-width: 768px) {
        max-width: 340px;
    }
`;

export const MovieBody = styled.div`
    height: 100%;
    width: 100%;
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
    font-size: 14px;
    line-height: 21px;
    color: #666;
`;

export const TitleInformation = styled.span`
    font-family: 'Abel', sans-serif;
    font-size: 22px;
    color: #116193;
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
    float: right;
    font-family: 'Abel', sans-serif;
    color: #00E8E4;
    font-size: 36px;
`;

export const Row = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-start; left;
    margin: 2em 0;
`;

export const RowInformation = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-start; left;
    margin: 2em 0;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;


export const Chips = styled.span`
    padding: 3px 8px;
    margin: 4px;
    color: #116193;
    background-color: #fff;
    border: solid 1px #116193;
    border-radius: 20px;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
`;

export const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 1em;
    min-width: 1em;

`;