import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  min-height: 4rem;
  padding: 1rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: green;
  width:100%;
  font-size: 18px;




  @media (max-width: 1024px) {
  align-items: center;
  justify-content: center;
  padding-top: 0;
  margin-top: 0;
  }
`

export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: nonwrap;
  flex-direction: row;
  width: 100%;
  position: relative;


  & p {
    text-align: center;
    flex: 0 0 100%;
  }

`

export const FooterSocialIcons = styled.div`
  flex: 0 0 100%;
  font-size: 3vh;
  text-decoration: none;
  background-color: red;

  & .img {
    color: #444444;
    padding: 0 1rem;
    transition: filter 0.3sec ease;
  }

  & .img:hover, img:focus {
    color: #9D5F5F;
  }
`

