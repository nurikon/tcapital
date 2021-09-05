import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSearch(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M18.688 17.19L15.1 13.611a8.357 8.357 0 001.783-5.17 8.442 8.442 0 10-8.441 8.441 8.357 8.357 0 005.17-1.783l3.577 3.588a1.054 1.054 0 001.499 0 1.054 1.054 0 000-1.498zM2.11 8.441a6.331 6.331 0 1112.663 0 6.331 6.331 0 01-12.663 0z" />
    </Svg>
  );
}

export default SvgSearch;
