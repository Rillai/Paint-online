import React, {useEffect, useRef} from 'react';
import '../styles/canvas.scss'
import {observer} from "mobx-react-lite";
import canvasState from '../store/canvas-state'
import toolState from '../store/tool-state'
import Brush from "../tools/brush";

export const Canvas = observer(() => {
 const canvasRef = useRef()

 useEffect(() => {
   canvasState.setCanvas(canvasRef.current);
   toolState.setTool(new Brush(canvasRef.current))
  },[])

  return (
   <div className='canvas'>
    <canvas ref={canvasRef} width={600} height={400}/>
   </div>
  )
 }
);
