import styled from 'styled-components';

const HeaderContainer = styled.header<{ $imageUrl?: string }>`
  background: ${props => props.$imageUrl ? `url(${props.$imageUrl})` : 'none'};
  // ... existing code ...
`; 