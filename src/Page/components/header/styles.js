import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 0rem 7%;

  > div {
    max-width: 79rem;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 0;
  }

  p {
    color: ${({ theme }) => theme.colors["text-darker"]};
    font-size: ${({ theme }) => theme.textSizes["title-m"]};
    font-weight: bold;
  }

  span {
    color: ${({ theme }) => theme.colors["main"]};
  }
`;

export const DesktopItem = styled.div`
  display: flex;
  gap: 1rem;
`;

export const MobileContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const MobileItem = styled.ul`
  display: none;

  @media (max-width: 768px) {
    display: block;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    text-transform: uppercase;
  }
`
