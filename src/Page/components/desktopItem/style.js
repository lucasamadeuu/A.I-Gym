import styled from "styled-components";

export const Item = styled.a`
  display: flex;
  transition: 0.3s;
  color: ${({ theme }) => theme.colors["text"]};
  text-decoration: none;
  font-weight: 500;

  &:hover {
  color: ${({ theme }) => theme.colors["main"]};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
