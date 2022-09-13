import styled from "styled-components";

export const ContainerPlan = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 25px;
  padding: 3rem 0;
  color: ${({ theme }) => theme.colors["background"]};
  background-color: ${({ theme }) => theme.colors["main"]};
  width: 340px;
  height: 486px;

  > h1 {
    font-size: ${({ theme }) => theme.textSizes["title-s"]};
    text-align: center;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 0.4rem;
  
  > p {
    font-size: ${({ theme }) => theme.textSizes["title-xl"]};
    font-weight: bold;
  }

  h5 {
    font-size: ${({ theme }) => theme.textSizes["text-s"]};
    font-weight: 500;
  }
`;

export const ContainerTopics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1rem 2rem;

  svg {
    fill: ${({ theme }) => theme.colors['main']};
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }

  p {
    font-size: ${({ theme }) => theme.textSizes["text-ss"]};
    font-weight: 600;
  }
`;

export const ContainerButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 25%;
  right: 25%;
  padding-bottom: 2rem;

  @media(max-width: 768px) {
  padding-bottom: 1.5rem;

  }
`;