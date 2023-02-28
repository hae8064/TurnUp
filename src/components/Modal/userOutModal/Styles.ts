import styled from 'styled-components';

export const Styles = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 400px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 44px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  & > h3 {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: center;
    color: #0b0b0c;
    margin-top: 44px;
  }

  & > h4 {
    font-family: 'LINE Seed Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #484848;
    margin-top: 10px;
  }

  .btnCT {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 34px;
    width: 100%;

    button:first-child {
      width: 176px;
      height: 64px;

      background: #3b72fe;
      border-radius: 12px;
      padding: 20px 36px;

      font-family: 'LINE Seed Sans KR';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      color: #ffffff;
      border: none;
    }

    button:last-child {
      width: 176px;
      height: 64px;
      background: #ebeae9;
      border-radius: 12px;
      padding: 20px 36px;
      border: none;
    }
  }
`;
