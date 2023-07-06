
const TorusKnot = ({ color, postion}) => {
  return (
    <mesh position={postion}>
        <torusKnotGeometry args={[0.5, 0.1, 64, 32, 5, 4]} />
      <meshStandardMaterial wireframe color={color} />
    </mesh>
  )
}

export default TorusKnot