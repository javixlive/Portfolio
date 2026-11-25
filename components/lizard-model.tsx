'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { ModelContainer, ModelSpinner } from './model-frame'

const MODEL_URL = '/lizard_mage.glb'
const INTRO_FRAMES = 100

const easeOutCirc = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 4))

export default function LizardModel() {
  const refContainer = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const container = refContainer.current
    if (!container) return

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    scene.add(new THREE.AmbientLight(0xcccccc, Math.PI))

    const target = new THREE.Vector3(-0.5, -2, 0)
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
    const scale = container.clientHeight * 0.005 + 2.4
    const camera = new THREE.OrthographicCamera(
      -scale,
      scale,
      scale,
      -scale,
      0.01,
      50000
    )
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true
    controls.target = target

    let frameRequest = 0
    let frame = 0
    const animate = () => {
      frameRequest = requestAnimationFrame(animate)

      if (frame < INTRO_FRAMES) {
        frame += 1
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20
        const p = initialCameraPosition
        camera.position.set(
          p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed),
          10,
          p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
        )
        camera.lookAt(target)
      } else {
        controls.update()
      }

      renderer.render(scene, camera)
    }

    let disposed = false
    new GLTFLoader().loadAsync(MODEL_URL).then(
      gltf => {
        if (disposed) return
        scene.add(gltf.scene)
        animate()
        setLoading(false)
      },
      (error: unknown) => {
        if (!disposed) console.error(error)
      }
    )

    const handleResize = () =>
      renderer.setSize(container.clientWidth, container.clientHeight)
    window.addEventListener('resize', handleResize)

    return () => {
      disposed = true
      cancelAnimationFrame(frameRequest)
      window.removeEventListener('resize', handleResize)
      controls.dispose()
      renderer.domElement.remove()
      renderer.dispose()
    }
  }, [])

  return (
    <ModelContainer ref={refContainer}>
      {loading && <ModelSpinner />}
    </ModelContainer>
  )
}
