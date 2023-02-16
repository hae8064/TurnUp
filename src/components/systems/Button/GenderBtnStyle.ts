import styled from 'styled-components';

interface GendBtnStyleType {
  color?: string;
}

export const GendBtnStyle = styled.div<GendBtnStyleType>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: none;
  border: none;
  margin-top: 26px;
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

  .genderBtm {
    display: flex;
    flex-direction: row;
    height: 52px;
    width: 100%;
    .woman {
      background: none;
      border: ${(props) =>
        props.color === 'woman' ? '1px solid #154BD6' : '1px solid #d2d0ce'};
      border-radius: 10px;
      width: 50%;
      margin-right: 10px;
      color: ${(props) => (props.color === 'woman' ? '#154BD6' : 'black')};
    }
    .man {
      background: none;
      border: ${(props) =>
        props.color === 'man' ? '1px solid #154BD6' : '1px solid #d2d0ce'};
      border-radius: 10px;
      width: 50%;
      color: ${(props) => (props.color === 'man' ? '#154BD6' : 'black')};
    }
  }

  margin-bottom: 26px;
`;
