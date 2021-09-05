import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGps(props) {
  return (
    <Svg
      height="24"
      viewBox="0 0 512 512"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M8.828 282.484H54.73c12.063 91.067 83.72 162.723 174.786 174.786v45.902a8.857 8.857 0 008.828 8.828h35.312a8.857 8.857 0 008.828-8.828V457.27c91.067-12.063 162.723-83.72 174.786-174.786h45.902a8.857 8.857 0 008.828-8.828v-35.312a8.857 8.857 0 00-8.828-8.828H457.27C445.207 138.449 373.55 66.793 282.484 54.73V8.828A8.857 8.857 0 00273.656 0h-35.312a8.857 8.857 0 00-8.828 8.828V54.73C138.449 66.793 66.793 138.45 54.73 229.516H8.828A8.857 8.857 0 000 238.344v35.312a8.857 8.857 0 008.828 8.828zM256 105.93c82.879 0 150.07 67.191 150.07 150.07S338.88 406.07 256 406.07 105.93 338.88 105.93 256c.117-82.832 67.238-149.953 150.07-150.07zm0 0" />
      <Path d="M326.621 256c0 39.004-31.617 70.621-70.621 70.621S185.379 295.004 185.379 256s31.617-70.621 70.621-70.621 70.621 31.617 70.621 70.621zm0 0" />
    </Svg>
  );
}

export default SvgGps;