import React from 'react';
import styled from 'styled-components';

const HamburgerMenuLabel = styled.label`
  --bar-width: 60px;
  --bar-height: 8px;
  --hamburger-gap: 6px;
  --foreground: #333;
  --background: white;
  --hamburger-margin: 8px;
  --animation-timing: 200ms ease-in-out;
  --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2);

  display: flex;
  flex-direction: column;
  gap: var(--hamburger-gap);
  width: max-content;
  position: absolute;
  top: var(--hamburger-margin);
  left: var(--hamburger-margin);
  z-index: 2;
  cursor: pointer;

  &:has(input:checked) {
    --foreground: white;
    --background: #333;
  }

  &:has(input:focus-visible)::before,
  &:has(input:focus-visible)::after,
  input:focus-visible {
    border: 1px solid var(--background);
    box-shadow: 0 0 0 1px var(--foreground);
  }

  &::before,
  &::after,
  input {
    content: '';
    width: var(--bar-width);
    height: var(--bar-height);
    background-color: var(--foreground);
    border-radius: 9999px;
    transform-origin: left center;
    transition: opacity var(--animation-timing), width var(--animation-timing),
      rotate var(--animation-timing), translate var(--animation-timing),
      background-color var(--animation-timing);
  }

  input {
    appearance: none;
    padding: 0;
    margin: 0;
    outline: none;
    pointer-events: none;
  }

  &:has(input:checked)::before {
    rotate: 45deg;
    width: calc(var(--hamburger-height) * 1.41421356237);
    transform: translate(0, calc(var(--bar-height) / -2));
  }

  &:has(input:checked)::after {
    rotate: -45deg;
    width: calc(var(--hamburger-height) * 1.41421356237);
    transform: translate(0, calc(var(--bar-height) / 2));
  }

  input:checked {
    opacity: 0;
    width: 0;
  }
`;

const Sidebar = styled.aside`
  transition: transform var(--animation-timing);
  transform: translateX(-100%);
  padding: 0.5rem 1rem;
  padding-top: calc(var(--hamburger-height) + var(--hamburger-margin) + 1rem);
  background-color: var(--foreground);
  color: var(--background);
  max-width: 10rem;
  min-height: 100vh;

  ${HamburgerMenuLabel}:has(input:checked) + & {
    transform: translateX(0);
  }
`;

const HamburgerMenuComponent = () => {
  return (
    <>
      <HamburgerMenuLabel>
        <input type="checkbox" />
      </HamburgerMenuLabel>
      {/* <Sidebar>
        <nav>
          <div>This</div>
          <div>Is</div>
          <div>The</div>
          <div>Sidebar</div>
        </nav>
      </Sidebar> */}
    </>
  );
};

export default HamburgerMenuComponent;
