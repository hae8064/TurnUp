import styled from 'styled-components';

interface CheckBtnTypes {
  checked?: boolean;
}

export const CheckButtonStyle = styled.div<CheckBtnTypes>`
  display: flex;
  width: 20px;
  height: 20px;
  /* 
  border: ${(props) => (props.checked ? 'none' : 'solid 0.1rem #dddddd')};
  */
  background: ${(props) => (props.checked ? '#3B72FE' : 'white')};
  border: 1px solid #ddd;
  border-radius: 0.4rem;
  transition: all 150ms;
  margin-right: 6px;
  justify-content: center;
  align-items: center;
`;
