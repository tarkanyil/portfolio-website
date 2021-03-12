import styled from 'styled-components';

export const Interested = styled.div`
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
@media only screen and (min-width: 768px) {
  flex-direction: row;
  text-align: left;
  /* justify-content: space-between; */
}
`;