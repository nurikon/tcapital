import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCalender(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 11 12"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M9.778 1.2h-.611V.6c0-.33-.275-.6-.611-.6a.607.607 0 00-.612.6v.6H3.056V.6c0-.33-.275-.6-.612-.6a.607.607 0 00-.61.6v.6h-.612C.544 1.2.006 1.74.006 2.4L0 10.8c0 .318.129.623.358.848.23.226.54.352.864.352h8.556C10.45 12 11 11.46 11 10.8V2.4c0-.66-.55-1.2-1.222-1.2zm0 3.6v6H1.222v-6h8.556z" />
    </Svg>
  );
}

export default SvgCalender;
