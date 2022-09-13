import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 7%;
  gap: 250px;

  @media(max-width: 768px) {
    gap: 230px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TitlePlan = styled.div`
  display: flex;
  padding-top: 3rem;
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

  @media (max-width: 768px) {
    > h1 {
        font-size: ${({ theme }) => theme.textSizes["title-s"]};
    }
  }
`;


