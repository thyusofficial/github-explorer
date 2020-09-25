import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const DownAndUp = keyframes`
  0%{
    transform: translateY(-100%);
    opacity: 0;
  }
  50%{
    transform: translateY(100%);
    opacity: 1;
  }
  100%{
    transform: translateY(0);
  }
`;

export const Container = styled.header`
  display: flex;
  align-items: center;

  img {
    margin-right: 56px;
  }

  button {
    background: none;
    border: none;
    color: ${props => props.theme.colors.title};

    svg {
      animation: ${DownAndUp} 0.5s;
    }
  }

  a {
    margin-left: auto;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.textSecundary};
    transition: color 0.2s;

    &:hover {
      color: ${props => shade(0.2, props.theme.colors.textSecundary)};
    }

    svg {
      margin-right: 4px;
    }
  }
`;
