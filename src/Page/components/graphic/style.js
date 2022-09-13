import styled from "styled-components";

export const GraphicContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  > h1 {
    font-size: ${({ theme }) => theme.textSizes["title-lm"]};
    color: ${({ theme }) => theme.colors["text-darker"]};
    text-align: center;
  }

  span {
    color: ${({ theme }) => theme.colors["main"]};
    font-weight: bold;
  }

  img {
    width: 70%;
  }

  @media (max-width: 768px) {
    > h1 {
      font-size: ${({ theme }) => theme.textSizes["title-s"]};
    }
    img {
      width: 100%;
    }
  }
`;

export const FrequencyContainer = styled.div`
  display: flex;
  justify-content: center;
`;
