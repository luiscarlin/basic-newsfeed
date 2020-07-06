import styled from 'styled-components';
import { colors } from './colors';

export const CardWrapper = styled.div`
  background: ${colors.cardBackground};
  width: 60rem;
  margin: 1rem;
  border: 1px solid ${colors.border};
  border-radius: 15px;
  box-shadow: 0px 2px 4px 1px ${colors.border};
  overflow: hidden;
`;

export const SmallProfilePic = styled.img`
  width: 5rem;
  border-radius: 50px;
  margin-right: 2rem;
`;
