import styled from "styled-components";

export const FotterContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors["fotter-background"]};
  flex-direction: column;
`;

export const FotterContainerPadding = styled.div`
  padding: 3rem 15rem 0rem 5rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 4rem;
    align-items: center;
    gap: 1rem;
  }
`;

export const FotterContainerLogo = styled.div`
  display: flex;

  p {
    color: ${({ theme }) => theme.colors["text-darker"]};
    font-size: ${({ theme }) => theme.textSizes["title-m"]};
    font-weight: bold;
  }

  span {
    color: ${({ theme }) => theme.colors["main"]};
  }
`;

export const FotterContainerContent = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    color: ${({ theme }) => theme.colors["text-darker"]};
    font-size: ${({ theme }) => theme.textSizes["text-m"]};
    font-weight: bold;
  }

  a {
    transition: 0.3s;
    color: ${({ theme }) => theme.colors["text"]};
    font-size: ${({ theme }) => theme.textSizes["text-s"]};
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.colors["main"]};
    }
  }
  @media (max-width: 768px) {
    padding-top: 0.6rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const FotterContainerAuthor = styled.div`
  padding: 4rem 0.5rem 0;
  position: relative;

  p {
    color: ${({ theme }) => theme.colors["text-darker"]};
    font-size: ${({ theme }) => theme.textSizes["text-s"]};
    font-weight: 600;
  }

  span {
    color: ${({ theme }) => theme.colors["main"]};
  }

  @media (max-width: 768px) {
    padding: 2rem 0.5rem 0;
  }
`;

export const FotterContainerAuthorName = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 45%;

  @media (max-width: 768px) {
    position: relative;
    left: 0;
    display: flex;
    justify-content: center;
  }
`;

export const FotterContainerMedias = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: end;

  div {
    display: flex;
  }

  img {
    width: 80%;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding-bottom: 1rem;
  }
`;
