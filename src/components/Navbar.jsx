import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo.png'

const Section = styled.div`
      display: flex;
      justify-content: center;

`
const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
`

const Links = styled.div`
      display: flex;
      align-items: center;
      gap: 50px;
`
const List = styled.ul`
      display: flex;
      gap: 30px;
      list-style: none;
`
const ListItem = styled.li`
      cursor: pointer;
`
const Icon = styled.div`
      display: flex;
      align-items: center;
      gap: 20px;
`
const Img = styled.img`
      width:80px;
      height:40px;
      border-radius: 0.25rem;
      `
      
const Button = styled.div`
      width: 100px;
      height: 20px;
      padding: 10px 15px;
      background: linear-gradient(180deg, #35a1ef 0%, #4949f9 100%);
      text-transform: uppercase;
      color: white;
      text-align: center;
      border: none;
      border-radius: 20px;
      cursor: pointer;
`

const Navbar = () => {
  return (
    <Section>
      <Container>
            <Links>
            <Img src= {Logo}/>
            <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Swap</ListItem>
                  <ListItem>Dashboard</ListItem>
                  <ListItem>About us</ListItem>
                  <ListItem>Contact</ListItem>
            </List>
            </Links>
            <Icon>
                  <Button>Connect</Button>
            </Icon>
      </Container>
    </Section>
  )
}

export default Navbar
