import styled from 'styled-components'

const Button = styled.button`
  width: 80%;
  font: inherit;
  padding: 1vh;
  border: 1px solid #8b005d;
  border-radius : 1vh;
  color: white;
  font-size : 2.5vh;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
  @media (min-width: 768px) {
    width: auto;
 }
`;

export default Button;