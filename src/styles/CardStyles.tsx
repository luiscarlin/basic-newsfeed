import styled from 'styled-components';
import { colors } from './colors';

export const CardWrapper = styled.div`
  background: ${colors.cardBackground};
  max-width: 60rem;
  width: 100%;
  min-width: 350px;
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

  @media (max-width: 500px) {
    width: 4rem;
  }
`;
