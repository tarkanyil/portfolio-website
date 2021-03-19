import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

import { colors } from '../../utils/constants.jsx';

export const PagerContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 148px;
    border-bottom: 1px solid rgba(51,50,61,0.15);
    border-top: 1px solid rgba(51,50,61,0.15);
    justify-content: space-between;
`;

export const LeftSide = styled(Link)`
    display: flex;
    flex-direction: column;
    width: 50%;
    border-right: 1px solid rgba(51,50,61,0.15);
    text-decoration: none;
    color: ${colors.primaryGrey}
`;

export const RightSide = styled(Link)`
    display: flex;
    flex-direction: column;
    text-align: right;
    text-decoration: none;
    color: ${colors.primaryGrey};
`;