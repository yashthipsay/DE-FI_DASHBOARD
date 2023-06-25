import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import hero from '../assets/hero.svg'
import './hero.css'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import background from './background.jpg';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: "bakground";
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

`
// const Title= styled.div`
// `
const Title = styled.h1`
  font-size: 85px;
  `


const Subtitle = styled.div`
`

const Right = styled.div`
  flex: 2;
  position: relative;
  
`

const Home = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>The Decentralized Token Exchange Platform</Title>
          <Subtitle><p>This is a Defi platform where you can swap your tokens,</p>
            <p>where you can borrow, lend the tokens, take a loan, etc.</p>
            <p>Swap with 0x!!.</p>
          </Subtitle>
        </Left>
        <Right>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.75}>
              <MeshDistortMaterial
                color="#0a1c34"
                attach="material"
                distort={0.4}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img className="hero-img" src={hero} alt="blockchain" />
        </Right>
      </Container>
    </Section>
  )
}

export default Home
