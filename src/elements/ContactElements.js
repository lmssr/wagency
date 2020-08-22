import styled from 'styled-components'

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 12rem;
  margin-bottom: 1000px;
  margin-left: 2rem;
  margin-right: 2rem;
  justify-content: center;
  text-align: center;
  z-index: 0;
  position: relative;
  background-color: green;
  border-radius: 4px;


p {
  color: #444444;
  positio
}

#name {
  border-radius: 4px;
  box-shadow: 5px 5px 5px #444444;
  width: 35rem;
  height: 5rem;
  margin: 30px;
  color: #444444;
  background-color: white;
  text-align: center;
  font-size: 30px;
  border: none;
  font-family: alice;
}

#email {
  border-radius: 4px;
  box-shadow: 5px 5px 5px #444444;
  width: 35rem;
  height: 5rem;
  margin: 30px;
  color: #444444;
  background-color: white;
  text-align: center;
  font-size: 30px;
  border: none;
  font-family: alice;
}

#subject {
  border-radius: 4px;
  box-shadow: 5px 5px 5px #444444;
  width: 35rem;
  height: 5rem;
  margin: 30px;
  color: #444444;
  background-color: white;
  text-align: center;
  font-size: 30px;
  border: none;
  font-family: alice;
}

#message {
  border-radius: 4px;
  box-shadow: 5px 5px 5px #444444;
  width: 35rem;
  height: 15rem;
  margin: 30px;
  color: #444444;
  background-color: white;
  text-align: center;
  font-size: 30px;
  border: none;
  font-family: alice;
  resize : none;
}

#button {
  color: white;
  font-size: 32px;
  width: 200px;
  height: 80px;
  text-align: center;
  align-content: center;
  justify-content: center;
  border-radius: 4px;
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
