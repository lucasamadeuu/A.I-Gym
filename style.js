import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 7%;
  gap: 250px;
`;

export const ContainerCard = styled.div`
  display: flex;
  gap: 6.25rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4.25rem;
  }
`;
