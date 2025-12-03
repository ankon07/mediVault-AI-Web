import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  sectionIndex: number;
}

// --------------------------------------------------------
// PARTICLE MORPHING SYSTEM
// --------------------------------------------------------

const PARTICLE_COUNT = 4000;
const DAMPING_FACTOR = 0.05; // Speed of morphing

const MorphingParticles: React.FC<{ sectionIndex: number }> = ({ sectionIndex }) => {
  const meshRef = useRef<THREE.Points>(null);
  
  // Target colors for each section: Teal, Violet, Emerald
  const palette = useMemo(() => [
    new THREE.Color("#14b8a6"),
    new THREE.Color("#8b5cf6"),
    new THREE.Color("#10b981")
  ], []);

  // --------------------------------------------------------
  // GEOMETRY GENERATION
  // --------------------------------------------------------
  
  // We generate 3 sets of positions (buffers) for our 3 shapes.
  const { positions, targetPositions } = useMemo(() => {
    const currentPos = new Float32Array(PARTICLE_COUNT * 3);
    
    // Shape 1: The Vortex (Spiral Galaxy) - Represents Scanning/Ingestion
    const shape1 = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const angle = Math.random() * Math.PI * 2 * 3; // 3 winds
      const radius = 2 + Math.random() * 5; // Spread out
      const spiralOffset = angle * 0.5;
      
      shape1[i * 3] = Math.cos(angle + spiralOffset) * radius;     // x
      shape1[i * 3 + 1] = (Math.random() - 0.5) * 2;               // y (flat-ish)
      shape1[i * 3 + 2] = Math.sin(angle + spiralOffset) * radius; // z
      
      // Initialize current positions
      currentPos[i * 3] = shape1[i * 3];
      currentPos[i * 3 + 1] = shape1[i * 3 + 1];
      currentPos[i * 3 + 2] = shape1[i * 3 + 2];
    }

    // Shape 2: The Helix (DNA/Structure) - Represents Management
    const shape2 = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const t = i / PARTICLE_COUNT * Math.PI * 20; // 10 turns
      const radius = 2.5;
      
      // Split into two strands
      const strand = i % 2 === 0 ? 0 : Math.PI;
      
      shape2[i * 3] = Math.cos(t + strand) * radius; // x
      shape2[i * 3 + 1] = (i / PARTICLE_COUNT) * 14 - 7; // y (Height from -7 to 7)
      shape2[i * 3 + 2] = Math.sin(t + strand) * radius; // z
      
      // Add a little noise to make it less perfect
      shape2[i * 3] += (Math.random() - 0.5) * 0.2;
      shape2[i * 3 + 1] += (Math.random() - 0.5) * 0.2;
      shape2[i * 3 + 2] += (Math.random() - 0.5) * 0.2;
    }

    // Shape 3: The Network (Sphere/Global) - Represents Analysis
    const shape3 = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
       const theta = Math.random() * Math.PI * 2;
       const phi = Math.acos((Math.random() * 2) - 1);
       const r = 4.5;

       shape3[i * 3] = r * Math.sin(phi) * Math.cos(theta);
       shape3[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
       shape3[i * 3 + 2] = r * Math.cos(phi);
    }

    return {
      positions: currentPos,
      targetPositions: [shape1, shape2, shape3]
    };
  }, []);

  // --------------------------------------------------------
  // ANIMATION LOOP
  // --------------------------------------------------------
  
  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const geo = meshRef.current.geometry;
    const posAttr = geo.attributes.position;
    const currentArr = posAttr.array as Float32Array;
    const targetArr = targetPositions[sectionIndex];

    // Morph positions
    // We use a simple lerp for each coordinate.
    // For 4000 particles, JS loop is performant enough (approx 12k ops per frame).
    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      currentArr[i] += (targetArr[i] - currentArr[i]) * DAMPING_FACTOR;
    }
    
    posAttr.needsUpdate = true;

    // Rotation
    // Different rotation speeds for different shapes
    const rotSpeed = sectionIndex === 0 ? 0.1 : 0.2;
    meshRef.current.rotation.y += delta * rotSpeed;

    // Color Transition
    const material = meshRef.current.material as THREE.PointsMaterial;
    material.color.lerp(palette[sectionIndex], delta * 2);
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color={palette[0]}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
};

// --------------------------------------------------------
// BACKGROUND STRUCTURE
// --------------------------------------------------------

const WireframeBackground: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.05;
            meshRef.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <group scale={15} position={[0, 0, -10]}>
             <TorusKnot ref={meshRef} args={[1, 0.3, 128, 16]}>
                 <meshBasicMaterial 
                    color="#1e293b" 
                    wireframe 
                    transparent 
                    opacity={0.1} 
                 />
             </TorusKnot>
        </group>
    )
}


// --------------------------------------------------------
// MAIN SCENE
// --------------------------------------------------------

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ sectionIndex }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-slate-950">
      <Canvas 
        camera={{ position: [0, 0, 12], fov: 50 }}
        dpr={[1, 2]} // Handle high DPI screens
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={['#020617']} />
        
        {/* Lights */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#14b8a6" />

        {/* Content */}
        <group>
           <MorphingParticles sectionIndex={sectionIndex} />
        </group>

        {/* Deep Background Elements */}
        <WireframeBackground />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        {/* Fog for depth */}
        <fog attach="fog" args={['#020617', 10, 30]} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;