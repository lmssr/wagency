import styled from 'styled-components'

export const AproposWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: auto;
  font-size: 24px;
  margin-top: 5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  text-align: center;
  justify-content: justify;
  z-index: 0;
  font-family: open sans;


  @media (max-width: 1024px) {
    margin-top: 12rem;
    font-size: 24px;
    height: 60rem;
  }

  @media (max-width: 768px) {
    margin-top: 16rem;
    font-size: 24px;
  }

    @media (max-width: 480px) {
    margin-top: 5rem;
    font-size: 16px;
    height: 65rem;
}
`
