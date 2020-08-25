import React from "react";
import Link from "next/link";
import styled from "styled-components";

const A = styled.a`
    display: inline-block;
    padding: 15px;
    cursor: pointer;
    
    &:hover {
      color: #2b2bff;
    }
`;

const StyledLayoutHaed = styled.nav`
  background: #fff;
  border-bottom: 1px solid #ccc;
  font-size: 0.86rem;
`;

const LayoutHead = () => {
    function OnChangeLocale() {
        alert(1);
    }

    return (
        <StyledLayoutHaed>
            <Link href="/">
                <A>대시보드</A>
            </Link>
            <Link href="/about">
                <A>서비스</A>
            </Link>
            <Link href="/users">
                <A>사용자 목록</A>
            </Link>
            <A href="/api/users">사용자 API</A>
            <Link href="/users">
                <A>사용자 인증</A>
            </Link>
            <A onClick={() => OnChangeLocale()}>언어변경</A>
        </StyledLayoutHaed>
    )
}

export default LayoutHead;