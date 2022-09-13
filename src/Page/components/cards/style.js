import styled from "styled-components";

export const StructureCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors["white"]};
  border-radius: 15px;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
  width: 254px;
  height: 254px;
  justify-content: space-around;
  transition: 0.3s;

  svg {
    color: ${({ theme }) => theme.colors["main"]};
    width: 50%;
    height: 50%;
  }

  > p {
    color: ${({ theme }) => theme.colors["text"]};
    font-weight: 500;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors["main"]};
    cursor: pointer;

    p {
      color: ${({ theme }) => theme.colors["background"]};
    }

    svg {
      color: ${({ theme }) => theme.colors["background"]};
    }
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.textSizes["text-s"]};
    width: 204px;
    height: 204px;

    svg {
      width: 60%;
      height: 50%;
    }
  }
`;
