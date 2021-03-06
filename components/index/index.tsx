/**
 * index.js
 */

import React, { useState } from "react";

import { ARCanvas, DefaultXRControllers, Interactive } from '@react-three/xr';
import { Sky, Text } from '@react-three/drei';


// Floor Mesh
const Floor: any = () => {

    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[40, 40]} />
            <meshStandardMaterial attach="material" color="#333" />
        </mesh>
    );

};


// Box Mesh
const Box: any = (props: any) => {

    const {
        size,
        color,
        children,
        ...rest
    } = props;

    return (
        <mesh { ...rest }>
            <boxBufferGeometry attach="geometry" args={ size } />
            <meshPhongMaterial attach="material" color={ color } />
            { children }
        </mesh>
    );

};


// Button Mesh
const Button: any = (props: any) => {

    const [hover, setHover] = useState(false);
    const [color, setColor] = useState(0x123456);

    const onSelect = () => {
        setColor((Math.random() * 0xFFFFFF) | 0);
    };

    return (
        <Interactive onSelect={ onSelect } onHover={ () => setHover(true) } onBlur={ () => setHover(false) }>
            <Box color={ color } scale={ hover ? [1.5, 1.5, 1.5] : [1, 1, 1] } size={[0.5, 0.1, 0.1]}>
                <Text position={[0, 0, 0.06]} fontSize={0.05} color="#000" anchorX="center" anchorY="middle">
                    Tree!
                </Text>
            </Box>
        </Interactive>
    );

};


const Index: any = () => {

    return (
        <ARCanvas>
            <Sky sunPosition={[0, 1, 0]} />
            <Floor />
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <DefaultXRControllers />
            <Button position={[0, 0.8, -1]} />
        </ARCanvas>
    );

};

export default Index;
