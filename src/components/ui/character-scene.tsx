'use client'

import { useRef, useEffect, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Float, ContactShadows, Environment } from '@react-three/drei'
import * as THREE from 'three'

useGLTF.preload('/person.glb')

function GLBCharacter() {
  const { scene } = useGLTF('/person.glb')

  // Clone so mutations don't affect the cached asset
  const model = useMemo(() => scene.clone(true), [scene])

  const groupRef   = useRef<THREE.Group>(null)
  const headBone   = useRef<THREE.Object3D | null>(null)
  const targetY    = useRef(0)
  const targetX    = useRef(0)

  // Auto-scale + centre the model, find head bone
  useEffect(() => {
    // Find the head bone (works for Meshy, Tripo3D, RPM, Mixamo rigs)
    model.traverse((child) => {
      const n = child.name.toLowerCase()
      if (!headBone.current && (n === 'head' || n.endsWith('_head') || n.includes('head')) && !n.includes('end')) {
        headBone.current = child
      }
    })

    // Normalise scale → 3.8 unit tall character
    const box  = new THREE.Box3().setFromObject(model)
    const size = new THREE.Vector3()
    box.getSize(size)

    if (size.y > 0) {
      const s = 3.8 / size.y
      model.scale.setScalar(s)

      const box2    = new THREE.Box3().setFromObject(model)
      const center2 = new THREE.Vector3()
      box2.getCenter(center2)

      model.position.set(-center2.x, -box2.min.y, -center2.z)
    }
  }, [model])

  // Mouse tracking
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      targetY.current =  (e.clientX / window.innerWidth  - 0.5) * 1.1
      targetX.current = -(e.clientY / window.innerHeight - 0.5) * 0.55
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame(() => {
    const lerpFactor = 0.08

    // Head bone → exactly follows cursor (like the robot's head)
    if (headBone.current) {
      headBone.current.rotation.y += (targetY.current * 0.75 - headBone.current.rotation.y) * lerpFactor
      headBone.current.rotation.x += (targetX.current * 0.4  - headBone.current.rotation.x) * lerpFactor
    }

    // Whole-body subtle lean (less if head bone handles tracking)
    if (groupRef.current) {
      const bodyScale = headBone.current ? 0.12 : 0.7
      groupRef.current.rotation.y += (targetY.current * bodyScale - groupRef.current.rotation.y) * lerpFactor
      groupRef.current.rotation.x += (targetX.current * bodyScale * 0.5 - groupRef.current.rotation.x) * lerpFactor
    }
  })

  return (
    <group ref={groupRef}>
      <primitive object={model} />
    </group>
  )
}

function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 3]} intensity={1.4} castShadow />
      <directionalLight position={[-3, 2, -2]} intensity={0.5} color="#818cf8" />
      <pointLight position={[0, -1, 3]} intensity={0.45} color="#4f46e5" />
      <pointLight position={[2, 3, 2]} intensity={0.2} color="#f0c060" />

      {/* Soft studio env for PBR materials from AI generators */}
      <Environment preset="studio" environmentIntensity={0.4} />

      {/* Idle float — same as robot */}
      <Float speed={1.8} rotationIntensity={0.03} floatIntensity={0.5}>
        <GLBCharacter />
      </Float>

      {/* Indigo glow shadow below feet */}
      <ContactShadows
        position={[0, 0, 0]}
        opacity={0.5}
        scale={5}
        blur={3}
        far={5}
        color="#4f46e5"
      />
    </>
  )
}

export function CharacterScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 1.8, 5.5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
