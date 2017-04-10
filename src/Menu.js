import React from 'react';
import Animated from 'animated/lib/targets/react-dom';

import Link from './Link';

export default ({ animation }) => (
  <Animated.div
    style={{
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: 'pink',
      opacity: animation
    }}
  >
    <Link
      animation={
        animation.interpolate({
          inputRange: [0.15, 0.8],
          outputRange: [0, 1]
        })
      }
    />

    <Link
      animation={
        animation.interpolate({
          inputRange: [0.25, 0.9],
          outputRange: [0, 1]
        })
      }
    />

    <Link
      animation={
        animation.interpolate({
          inputRange: [0.35, 1],
          outputRange: [0, 1]
        })
      }
    />
  </Animated.div>
);
