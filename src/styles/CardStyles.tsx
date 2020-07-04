import styled from 'styled-components';
import { colors } from './colors';

export const CardContainer = styled.div`
  background: ${colors.cardBackground};
  width: 60rem;
  margin: 1rem;
  border: 1px solid ${colors.border};
  border-radius: 15px;
  box-shadow: 0px 2px 4px 1px ${colors.border};
`;
