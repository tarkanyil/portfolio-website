import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    height: 418px;
    gap: 8%;
    ${(props) => {
      if (props.order === 'even') {
        return `flex-direction: row-reverse; margin-left: auto;`;
      } else {
        return `flex-direction: row`;

      }
    }}
  }
  @media only screen and (min-width: 1440px) {
    width: 91%;
    height: 500px;
    gap: 12%;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  max-height: 390px;
  @media only screen and (min-width: 1440px) {
    width: 540px;
    max-height: 500px;
  }
`;

export const ItemImageContainer = styled.div`
  flex: 1 0 50%;
  align-self: center;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 368px;
  @media only screen and (min-width: 768px) {
    flex: 1 0 42%;
    height: 100%;
  }
  @media only screen and (min-width: 1440px) {
    ${(props) => {
      if (props.order === 'odd') {
        return `padding-right: 9%`;
      } else {
        return `padding-left: 9%`;
      }
    }}

  }
`;
