import React from 'react';
import Animated from 'animated/lib/targets/react-dom';

export default ({ animation }) => (
  <Animated.div
    style={{
      height: 100,
      width: 100,
      opacity: animation,
      background: 'green'
    }}
  />
);

