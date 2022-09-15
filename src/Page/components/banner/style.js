import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60vh;
  align-items: center;
  padding: 2rem 0;
  @media (max-width: 768px) {
    padding: 4.5rem 0;
    justify-content: center;
  }
`;

export const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (max-width: 768px) {
    align-items: center;
    gap: 2rem;
  }
`;

export const BannerTitle = styled.div`
  h1 {
    font-size: ${({ theme }) => theme.textSizes["title-l"]};
    font-weight: 600;
  }
  h2 {
    font-size: ${({ theme }) => theme.textSizes["title-l"]};
    font-weight: 400;
    padding-left: 4vh;
  }
`;

export const BannerText = styled.div`
  width: 80%;
  p {
    font-size: ${({ theme }) => theme.textSizes["text-s"]};
    color: ${({ theme }) => theme.colors["text"]};
  }
  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const BannerImage = styled.div`
  width: 25%;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
