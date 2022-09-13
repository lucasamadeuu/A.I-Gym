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
`;

export const FotterContainerAuthorName = styled.div`
  position: absolute;
  bottom: .5rem;
  left: 45%;
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
`;
