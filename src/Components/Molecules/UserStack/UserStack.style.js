import styled from "styled-components";


const UserStackContainer = styled.div`
`

const UserNameChip = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({bgColor}) => bgColor};
    border: none;
    color: white;
`;

export { UserNameChip,UserStackContainer};
