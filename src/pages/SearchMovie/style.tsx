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