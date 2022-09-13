import styled from "styled-components";

export const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;

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

export const ContainerAboutInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  > img {
    width: 45%;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > img {
      width: 100%;
    }
  }
`;

export const ContainerAboutInfoText = styled.div`
  color: ${({ theme }) => theme.colors["text"]};
  font-size: ${({ theme }) => theme.textSizes["text-m"]};
  width: 42%;
  text-align: justify;

  @media (max-width: 768px) {
    width: 90%;
    font-size: ${({ theme }) => theme.textSizes["text-s"]};
  }
`;
