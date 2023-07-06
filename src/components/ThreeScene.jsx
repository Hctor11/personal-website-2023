import { Canvas } from "@react-three/fiber"

const ThreeScene = ({ children }) => {
  return <Canvas style={{
    height: '100vh',
    width: '100vw'
  }}>{ children }</Canvas>
}

export default ThreeScene