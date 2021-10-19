import React from 'react';
import '../styles/toolbar.scss'
import toolState from '../store/tool-state'
import canvasState from '../store/canvas-state'
import Brush from "../tools/brush";
import Rect from "../tools/rect";

export const Toolbar = () => (
 <div className='toolbar'>
  <button className='toolbar__btn' onClick={()=> toolState.setTool(new Brush(canvasState.canvas))}>Brush</button>
  <button className='toolbar__btn' onClick={()=> toolState.setTool(new Rect(canvasState.canvas))}>Rect</button>
  <button className='toolbar__btn'>Circle</button>
  <button className='toolbar__btn'>Eraser</button>
  <button className='toolbar__btn'>Line</button>
  <input type="color"/>
  <button className='toolbar__btn'>Undo</button>
  <button className='toolbar__btn'>Redo</button>
  <button className='toolbar__btn'>Save</button>
 </div>
);
