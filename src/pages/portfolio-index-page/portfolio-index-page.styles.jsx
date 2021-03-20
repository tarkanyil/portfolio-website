import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    height: 418px;
}
`;

export const ItemImage = styled.img`
    width: 100%;
    max-height: 390px;
`;

export const ItemImageContainer = styled.div`
    flex: 1 0 50%;
    align-self: center;
`;

export const WhiteSpace = styled.div`
  @media only screen and (min-width: 768px) {
    flex: 1 0 8%;
  }
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
`;
