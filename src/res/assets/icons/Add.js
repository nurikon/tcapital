import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAdd(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M8 0a1 1 0 011 1v6h6a1 1 0 110 2H9v6a1 1 0 11-2 0V9H1a1 1 0 010-2h6V1a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgAdd;
