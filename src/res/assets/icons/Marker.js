import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMarker(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 10 12"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M5 0c2.762 0 5 2.211 5 4.939 0 2.087-1.485 4.36-4.415 6.847a.904.904 0 01-1.171-.001l-.194-.166C1.419 9.198 0 6.979 0 4.939 0 2.21 2.238 0 5 0zm0 3.04c-.51 0-1 .2-1.36.556-.36.356-.563.839-.563 1.343 0 .503.203.987.563 1.343.36.356.85.556 1.36.556.51 0 1-.2 1.36-.556.36-.356.563-.84.563-1.343 0-.504-.203-.987-.563-1.343A1.935 1.935 0 005 3.039z" />
    </Svg>
  );
}

export default SvgMarker;
