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

  > img {
    width: 60%;
    height: 50%;
  }

  > p {
    color: ${({ theme }) => theme.colors["text"]};
    font-weight: 500;
  }
`;
