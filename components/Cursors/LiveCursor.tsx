import { LiveCursorProps } from '@/types/type';
import React, { useCallback } from 'react';
import Cursors from './Cursors';
import { COLORS } from '@/constants';

const LiveCursor = ({ others }: LiveCursorProps) => {
  return others.map(({ connectionId, presence }) => {
    if (!presence?.cursor) return null;

    return (
      <Cursors
        key={connectionId}
        x={presence.cursor.x}
        y={presence.cursor.y}
        color={COLORS[Number(connectionId) % COLORS.length]}
        message={presence.message}
      />
    );
  });
};

export default LiveCursor;
