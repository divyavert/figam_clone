import CursorSVG from '@/public/assets/CursorSVG';
import React from 'react';

type props = {
  x: number;
  y: number;
  color: string;
  message: string;
};
const Cursors = ({ x, y, color, message }: props) => {
  return (
    <div
      className='pointer-events-none absolute top-0 left-0'
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
    >
      <CursorSVG color={color} />
    </div>
  );
};

export default Cursors;
