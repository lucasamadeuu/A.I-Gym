import styled from "styled-components";

export const ButtonCustom = styled.a`
  cursor: pointer;
  text-decoration: none;
  width: 170px;
  background-color: ${({ theme }) => theme.colors["main"]};
  color: ${({ theme }) => theme.colors["background"]};
  border-radius: 10px;
  padding: 1rem;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors["hover"]};
  }
`;

export const ButtonCustomWhite = styled.a`
  cursor: pointer;
  text-decoration: none;
  width: 170px;
  background-color: ${({ theme }) => theme.colors["background"]};
  color: ${({ theme }) => theme.colors["main"]};
  border-radius: 10px;
  padding: 1rem;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors["white"]};
  }
`;
