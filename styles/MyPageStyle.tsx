import styled from 'styled-components';

export const MyPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  .modal_bgtrue {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal_bgfalse {
    display: none;
  }
`;
