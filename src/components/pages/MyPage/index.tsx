import React from "react";
import styled from "styled-components";

function MyPage() {
  return (
    <MyPageContainer>
      MyPage Page MyPage Page MyPage Page; MyPage Page MyPage Page MyPage Page
      MyPage Page MyPage Page MyPage Page MyPage Page
    </MyPageContainer>
  );
}

export default MyPage;

const MyPageContainer = styled.div`
  position: absolute;
  left: 50%;
`;
