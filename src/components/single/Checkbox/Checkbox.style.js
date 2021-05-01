import styled from "styled-components";

export const Label = styled.label`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
  align-items: center;
`;

export const Element = styled.input`
  position: fixed;
  top: -10vh;
  left: -10vw;
  opacity: 0;
`;

export const Input = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border: ${(p) => `.15rem solid rgb(${p.theme.primary.main})`};
  cursor: pointer;
`;

export const CheckMark = styled.div`
  width: 1rem;
  height: 1rem;
  background: ${(p) => (p.checked ? `rgb(${p.theme.primary.main})` : "none")};
  transition: background 0.2s ease-in-out;
`;
