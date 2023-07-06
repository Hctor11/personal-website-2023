import ThreeScene from "./ThreeScene"
import TorusKnot from "./TorusKnot"
import { AsciiRenderer, OrbitControls } from "@react-three/drei"

const Ascii = () => {
  return (
    <div className="ascii-three">
        <ThreeScene>
          <color attach={"background"} args={["black"]}/>
          <TorusKnot 
             color="#fff"
             postion={[0,0.3,0]}
           />
           <AsciiRenderer fgColor="#282828" bgColor="#0E0E0E"/>
           <ambientLight/>
           <OrbitControls 
            autoRotate 
            autoRotateSpeed={10} 
            enableZoom={false}
            minDistance={0.8}
            maxDistance={0.8}
            />
        </ThreeScene>
        <div className="header-text">
          <h1 className="main-headline">Hi, I'm Hector Rivera</h1>
          <p className="main-p">// Developer and Designer based in El Salvador.</p>
        </div>
    </div>
  )
}

export default Ascii