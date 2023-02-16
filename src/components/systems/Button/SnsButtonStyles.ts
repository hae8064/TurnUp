import styled from 'styled-components';

interface SnsBtnTypes {
  background?: string;
  margin?: string;
}

export const SnsButtonStyled = styled.button<SnsBtnTypes>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background};
  border-radius: 12px;
  padding: 18px 0px;
  gap: 4px;
  border: none;
  width: 184px;
  height: 60px;
  margin-right: ${(props) => (props.margin ? props.margin : '0px')};

  .snsIcon {
    margin-right: 4px;
  }
  & > span {
    /* PC/Body/Body 4 */

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* Background/Dark/primaryBackground */
    color: #0b0b0c;
  }
`;
