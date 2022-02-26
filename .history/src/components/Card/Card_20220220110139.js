import React from "react";
import styled, { css } from "styled-components";

/**
 * const StylecCard = styled.tag(h1, h2, div, span, a,p , section....)``
 * CSS-in-JS
 */

const StyledCard = styled.div`
  position: relative;
`;

const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  border: 0;
  bottom: 0;
  transform: translate(-50%, 50%);
  width: calc(100% - 36px);
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Carttitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;

const CartAmount = styled.span`
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: bold;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );
  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(86.88deg, #20e3b2, #2cccff);
    `};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900"
          alt=""
        />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900"
              alt=""
            />
            <UserName>@zndrson</UserName>
          </CardUser>
          <div>256</div>
        </CardTop>
        <CardFooter>
          <Carttitle>Cosmic Perspective</Carttitle>
          <CartAmount secondary={props.secondary}>12,000 PSL</CartAmount>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
