import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { Sky } from '@react-three/drei'
import Loader from '../components/Loader'
import Piney from '../models/Piney'
import Mushroom from '../models/Mushroom'
import Ground from '../models/Ground'
import Firefly from '../models/firefly'
import Firefly_two from '../models/firefly_two'
import Fern from '../models/fern'


const Home = () => {

    const generateRandomPosition = () => [
        (Math.random() - 0.4) * 10,
        Math.random() * 5,
        (Math.random() - 0.4) * 10
      ];

    // Create an array to hold the positions of the fireflies
    const fireflyPositions = new Array(2).fill().map(generateRandomPosition);    
    const fireflyPositions_sec = new Array(4).fill().map(generateRandomPosition);    
    
    
    return (
        <section className="w-full h-screen relative">
            <Canvas 
                className='w-full h-screen bg-transparent'
                shadows // Enable shadows in the Canvas
                camera={{ position: [9, -3, 20], fov: 25 }}
            >
                <Suspense fallback={<Loader />}>
                    <Sky
                        distance={20} // size of the skybox
                        sunPosition={[6, -5, 30]} // sun position, can be used to simulate moonlight
                        inclination={0.1} // sun elevation angle from 0 to 1 (0 = sunrise, 0.5 = in the sky, 1 = sunset)
                        azimuth={0.25} // sun rotation around the Y axis from 0 to 1
                        // You can adjust these colors to fine-tune the appearance of the sky
                        rayleigh={4} // controls the atmospheric scattering (makes the sky blue)
                        mieCoefficient={0.005} // amount of haze or glare
                        mieDirectionalG={0.1} // directionality of the haze or glare effect
                        turbidity={1000} // controls the amount of particles in the atmosphere
                    />

                    {/* Create a soft ambient light that simulates the moon's diffuse glow */}
                    <ambientLight intensity={0.3} color="#b9d5ff" />
                    {/* Simulate moonlight casting from above */}
                    <directionalLight
                        position={[-7, 20, 20]}
                        intensity={0.5}
                        color="#b9d5ff"
                        castShadow
                        shadow-mapSize-width={2048} 
                        shadow-mapSize-height={2048} 
                    />
                    {/* Add stars to the background */}
                    <Stars
                        radius={100}
                        depth={50}
                        count={5000}
                        factor={4}
                        saturation={0}
                        fade={true}
                    />
                
                    <Piney
                        position = {[1, 1.1, 1.1]}
                        scale = {[1,1,1]}
                        rotation = {[-0.07, 2.7, -0.13]}
                    />
                    <Fern
                        position = {[-4, 0, -2.2]}
                        scale = {[1,1,1]}
                        rotation = {[-2,0,0]}
                    />
                    <Fern
                        position = {[-1, -6, 8]}
                        scale = {[0.5,0.5,0.5]}
                        rotation = {[-2,1,1]}
                    />
                    <fog attach="fog" color="white" near={0} far={130} />
                    <Mushroom
                        position={[2.3, -2.2, 0.8]}
                        scale={[0.06, 0.05, 0.05]}
                        rotation={[-0.05, 0, 0]}
                    />
                    <Mushroom
                        position={[4, -2.55, -0.1]}
                        scale={[0.027, 0.02, 0.05]}
                        rotation={[0.15, 0, 0]}
                    />
                    <Mushroom
                        position={[-5.5, -2, -1]}
                        scale={[0.007, 0.03, 0.03]}
                        rotation={[0.15, 0, 0]}
                    />
                    <Ground
                        position={[4, 0, -11]}
                        scale={[20, 35, 30]}
                        rotation={[1.1, 2.2, -19.3]}
                    />
                    {fireflyPositions.map((pos, index) => (
                        <Firefly key={index} position={pos} scale={[1, 1, 1]} />
                    ))}
                    {fireflyPositions_sec.map((pos, index) => (
                        <Firefly_two key={index} position={pos} scale={[1, 1, 1]} />
                    ))}
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home
