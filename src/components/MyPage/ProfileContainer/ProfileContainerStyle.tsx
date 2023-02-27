import styled from 'styled-components';

export const ProfileContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .profileSetting {
    max-width: 680px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .title {
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      /* identical to box height, or 150% */

      /* Text/Light/Primary Text */

      color: #0b0b0c;
      margin-top: 68px;
    }
  }
`;
