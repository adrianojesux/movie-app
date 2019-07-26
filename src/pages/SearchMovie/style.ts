import styled from 'styled-components';

export const Search = styled.input`
    width: 80%;
    padding: 12px;
    font-size: 16px;
    background-color: #EBEBEB;
    font-family: 'Abel', sans-serif;
    margin: 1em auto;
    border-radius: 20px;
    border: none;
    color: #666;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: #00E8E4;
    }
    :-ms-input-placeholder {
        color: #00e8e4;
    }
`;

export const Pagination = styled.div`
    // position: absolute;
    bottom: 0;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 8px;
`;

export const PageButton = styled.button`
    border: 0;
    background: transparent;
    font-size: 18px;
    font-family: 'Abel',sans-serif;
    color: #116193;
    padding: .8em;
`;

export const PageActual = styled.div`
    width: 3em;
    height: 3em;
    font-size: 24px;
    font-family: 'Abel',sans-serif;
    background-color: #116193;
    color: #00e8e4;
    border: solid 5px #00e8e4;
    padding: 1em;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

