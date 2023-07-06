import { Canvas } from "@react-three/fiber"

const ThreeScene = ({ children }) => {
  return <Canvas style={{
    height: '150vh',
    width: '100vw'
  }}>{ children }</Canvas>
}

export default ThreeScene