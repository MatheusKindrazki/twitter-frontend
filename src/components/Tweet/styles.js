import styled from "styled-components";

import like from "../../images/like.svg";
import liked from "../../images/liked.svg";

export const Container = styled.li`
  margin-top: 10px;
  padding: 20px;
  color: #3e3e3e;

  + li {
    border-top: 1px solid #eee;
  }
  strong {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #4a4a4a;
    font-weight: bold;

    display: flex;
    align-items: center;

    img {
      margin: 0 !important;
      padding: 0;
      padding-right: 10px;
      border-radius: 2px;
    }
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 20px;
    color: #333;
    padding: 15px;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  position: relative;
  display: block;
  margin-left: 25px;

  font-size: 13px;
  font-weight: normal;
  color: #333;

  &:before {
    content: "";
    position: absolute;
    right: 20px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: 25px;
    height: 20px;
    background: url(${props => (props.liked ? liked : like)});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
