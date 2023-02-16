import styled from 'styled-components';

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    width: 97%;
  }
  label {
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: 20px;
    color: #484848;
    margin-bottom: 8px;

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
  }
  & > .input_box {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Works for Firefox */
    input[type='number'] {
      -moz-appearance: textfield;
    }
    input,
    textarea {
      height: 52px;
      padding: 0 16px;
      width: 100%;
      font-weight: 400;
      font-size: 14px;
      border: 1px solid #d2d0ce;
      border-radius: 10px;
      outline: none;
      &::placeholder {
        color: #d2d0ce;
      }
      &.error {
        outline: 2px solid #ff3850;
      }
      &:focus {
        outline: 2px solid #3b72fe;
      }
    }
    textarea {
      resize: none;
      max-height: 300px;
      font-family: 'Noto Sans KR', sans-serif;
      padding: 16px;
    }
    button {
      position: absolute;
      padding: 8px 0px 8px 8px;
      right: 16px;
      background: none;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.15s ease-in-out;
      &:hover {
        color: #aaa;
      }
    }
    .rightBtn {
      position: absolute;
      right: 10px;
    }
    .rightTextfalse {
      position: absolute;
      right: 10px;
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      /* identical to box height, or 150% */

      /* Text/Light/Disabled Text */

      color: #d2d0ce;
    }
    .rightTexttrue {
      position: absolute;
      right: 10px;
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      /* identical to box height, or 150% */

      /* Text/Light/Disabled Text */

      color: blue;
    }
  }
  p.message {
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-top: 4px;
    line-height: 1.5;

    span {
      text-indent: 4px;
      font-size: 12px;
    }
    &.error {
      color: #ff3850;
    }
    &.info {
      display: flex;
      align-items: center;
      color: #3b72fe;
    }
  }
`;
