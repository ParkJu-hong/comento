import React from 'react';
import styled from 'styled-components';

function Sidebar() {
    const [today, setToday] = React.useState(`${new Date().getFullYear()} / ${new Date().getMonth()} / ${new Date().getDate()}`);

    return (
        <Main>
            <TodoLogo>Todo Calendar {today}</TodoLogo>
            <RegisterBox>
                <TodoBox >Todo</TodoBox>
                <DescriptionBox>Description</DescriptionBox>
                <DayBox>2022/02/15</DayBox>
                <RegisterButton></RegisterButton>
            </RegisterBox>
        </Main>
    )
}
const RegisterButton = styled.div`
    position: absolute;
    width: 113.18px;
    height: 33.67px;
    left: 119px;
    top: 166.78px;

background: #333333;
border-radius: 5.02122px;
`

const DayBox = styled.div`
position: absolute;
left: 7.73%;
right: 5.08%;
top: 43.54%;
bottom: 43.15%;

/* Gray 5 */

background: #E0E0E0;
border-radius: 5px;
`

const DescriptionBox = styled.div`
position: absolute;
left: 7.78%;
right: 5.03%;
top: 25.52%;
bottom: 61.18%;

/* Gray 5 */

background: #E0E0E0;
border-radius: 5px;
`

const TodoBox = styled.div`
position: absolute;
left: 7.78%;
right: 5.03%;
top: 7.58%;
bottom: 79.12%;

/* Gray 5 */

background: #E0E0E0;
border-radius: 5px;
`

const RegisterBox = styled.div`
position: absolute;
width: 352px;
height: 219px;
left: 10px;
top: 85px;
background: #F2F2F2;
border-radius: 9.4498px;
`

const Main = styled.div`
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
width: 377px;
height: 100vh;

background: #E2E2E2;
`

const TodoLogo = styled.div`
position: absolute;
width: 316px;
height: 54px;
left: 33px;
top: 26px;

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 20.6446px;
line-height: 25px;
display: flex;
align-items: center;

color: #807B7B;
`

export default Sidebar
