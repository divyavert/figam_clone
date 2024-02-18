import React from 'react';
import LiveCursor from './Cursors/LiveCursor';
import { useCallback } from 'react';
import { useMyPresence, useOthers } from '@/liveblocks.config';

const Live = () => {
  const other = useOthers();
  const [{ cursor }, updatePresence] = useMyPresence();
  const handleCursorMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
    updatePresence({ cursor: { x, y } });
  }, []);
  const handleCursorLeave = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    updatePresence({ cursor: null });
  }, []);
  const handleCursorDown = useCallback((event: React.PointerEvent) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
    updatePresence({ cursor: null });
  }, []);
  return (
    <div
      onPointerMove={handleCursorMove}
      onPointerDown={handleCursorDown}
      onPointerLeave={handleCursorLeave}
      className='h-[100vh] w-full flex justify-center items-center'
    >
      <h1 className='font-xl text-white'>yo yo </h1>
      <LiveCursor others={other} />
    </div>
  );
};

export default Live;
