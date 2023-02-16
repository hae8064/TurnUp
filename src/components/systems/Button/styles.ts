import styled from 'styled-components';

interface ButtonBoxTypes {
  ghost?: boolean;
  bgColor?: string;
  outline?: boolean;
  RightBtn?: boolean;
  size?: string;
  block?: boolean;
  loginBtnActive?: boolean;
}

export const ButtonBox = styled.button<ButtonBoxTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px 0;
  padding: 16px 32px;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  background: ${(props) => (props.bgColor ? props.bgColor : '#a8c0ff')};
  border-radius: 10px;
  outline: none;
  border: 1px solid #ffffff00;
  cursor: pointer;
  transition: all 0.15s;

  @media screen and (max-width: 500px) {
    width: 97%;
  }

  i {
    font-size: 20px;
    &.left {
      margin-right: 6px;
    }
    &.right {
      margin-left: 6px;
    }
  }
  /* &:hover {
    background: #154bd6;
  } */
  /* &:active {
    background: #0738b6;
    outline: 3px solid rgba(7, 56, 182, 0.4s);
  } */
  &:disabled {
    cursor: not-allowed;
    background: #a8c0ff;
    outline: 3px solid #ffffff00;
  }

  ${({ outline }) =>
    outline &&
    `
        background: none;
        border-color: #3b72fe;
      color: #3b72fe;
      &:hover{
        background: none;
        border-color: #154bd6;
        color: #154BD6;
      }
      &:active{
        background: #0738B61F;
        outline: 3px solid rgba(7, 56, 182, 0);
      }
      &:disabled{
        background: none;
        border-color: #D2D0CE;
        color: #D2D0CE;
      }
    `}

  ${({ RightBtn }) =>
    RightBtn &&
    `
      position: absolute;
  `}

  ${({ ghost }) =>
    ghost &&
    `
            background: none;
            outline: none;
            border: none;
            color:#0B0B0C;
        `}

    ${({ size }) => {
    switch (size) {
      case 'xs':
        return {
          padding: '10px 16px',
          fontSize: 14,
          i: {
            fontSize: 12,
          },
        };
      case 'm':
        return {
          padding: '20px 36px',
          fontSize: 16,
          i: {
            fontSize: 20,
          },
        };
      case 'l':
        return {
          padding: '22px 36px',
          fontSize: 18,
          i: {
            fontSize: 24,
          },
        };
      default:
        return;
    }
  }}

  ${({ block }) =>
    block &&
    `
        flex: 1;
        width: 100%;
    `}

    ${({ loginBtnActive }) =>
    loginBtnActive &&
    `
    background: #0738b6;
    outline: 3px solid rgba(7, 56, 182, 0.4s);
      `}
`;

export const FltBtnBox = styled(ButtonBox)`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;
