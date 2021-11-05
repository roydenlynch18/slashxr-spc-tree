
// import React from "react";
// import { ARCanvas, DefaultXRControllers, useHitTest } from '@react-three/xr'
// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'



// import { Box } from '@react-three/drei'

// function HitTestExample() {
//     const ref = React.useRef()
  
//     useHitTest((hit) => {
//       hit.decompose(ref.current.position, ref.current.rotation, ref.current.scale)
//     })
  
//     return <Box ref={ref} args={[0.1, 0.1, 0.1]} />
// };

// const Tree: NextPage = () => {
//     return (
//         <ARCanvas sessionInit={{ requiredFeatures: ['hit-test'] }}>
//             <ambientLight />
//             <pointLight position={[10, 10, 10]} />
//             <HitTestExample />
//             <DefaultXRControllers />
//         </ARCanvas>
//     )
// };

// export default Home;
