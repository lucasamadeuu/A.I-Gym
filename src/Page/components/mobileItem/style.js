import styled from "styled-components";

export const Item = styled.a`
  display: flex;
  transition: 0.3s;
  color: ${({ theme }) => theme.colors["text"]};
  text-decoration: none;
  font-weight: 500;
  padding: 0.4rem;
  font-size: ${({ theme }) => theme.textSizes["text-s"]};

  &:focus {
    color: ${({ theme }) => theme.colors["main"]};
    background-color: ${({ theme }) => theme.colors["white"]};
    border-radius: 5px;
  }
`;
