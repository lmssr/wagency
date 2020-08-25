import styled from 'styled-components'

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 6rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
  justify-content: center;
  text-align: center;
  z-index: 0;
  position: relative;
  background: linear-gradient(111.76deg, rgba(233, 160, 160, 0.076) -3.76%, rgba(157, 95, 95, 0.076) 105.15%);
  border-radius: 4px;


p {
  color: fff;
  margin: auto;
}

#name {
  border-radius: 4px;
  box-shadow: 5px 5px 5px #a3a3a3;
  width: 40rem;
  height: 4rem;
  margin: 30px;
  color: #444444;
  background-color: white;
  text-align: center;
  font-size: 24px;
  border: none;
  font-family: alice;
}

#email {
  border-radius: 4px;
  box-shadow: 5px 5px 5px #a3a3a3;
  width: 40rem;
  height: 4rem;
  margin: 30px;
  color: #444444;
  background-color: white;
  text-align: center;
  font-size: 24px;
  border: none;
  font-family: alice;
}

#subject {
  border-radius: 4px;
  box-shadow: 5px 5px 5px #a3a3a3;
  width: 40rem;
  height: 4rem;
  margin: 30px;
  color: #444444;
  background-color: white;
  text-align: center;
  font-size: 24px;
  border: none;
  font-family: alice;
}

#message {
  border-radius: 4px;
  box-shadow: 5px 5px 5px #a3a3a3;
  width: 40rem;
  height: 15rem;
  margin: 30px;
  color: #444444;
  background-color: white;
  text-align: center;
  font-size: 24px;
  border: none;
  font-family: alice;
}

#button {
  display: flex;
  margin: auto;
  color: white;
  font-size: 24px;
  width: 200px;
  height: 4rem;
  text-align: center;
  align-content: center;
  justify-content: center;
  border-radius: 4px;
  border: 0;
  transition: filter 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  background: linear-gradient(180deg, #E9A0A0 0%, #9D5F5F 100%);



  &:hover,
  &:focus {
    filter: brightness(120%);
  }
}

  @media (max-width: 1024px) {
    margin-top: 1rem;

    #name,
    #email,
    #subject,
    #message {
      display: flex;
      flex-direction: column;
      width: 90%;
  }

  #button {
    position: absolute;
    left: 30px;
    top: 1000px;
    font-size: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 25rem;
    height: 5rem;

    #name,
    #email,
    #subject,
    #message {
      display: flex;
      flex-direction: column;
      width: 90%;
  }

  #button {
    position: absolute;
    left: 30px;
    top: 600px;
    font-size: 30px;
  }

`

export const HoursWrapper = styled.div`

`
