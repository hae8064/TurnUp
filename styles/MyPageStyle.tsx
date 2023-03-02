import styled from 'styled-components';

export const MyPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  .modal_bgtrue {
    position: fixed;
    width: 100vw;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal_bgfalse {
    display: none;
  }

  .contentsCT {
    display: flex;
    flex-direction: row;
    width: 100%;
    .contents {
      flex: 1;
    }

    .greyRight {
      width: 96px;
      background-color: #f7f7f8;
    }
  }
`;
