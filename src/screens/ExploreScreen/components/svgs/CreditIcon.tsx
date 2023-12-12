import * as React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";
import { ColorPalette } from "../../../../styles/ColorPalette";

const CreditIcon = (props: SvgProps) => {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <G strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <Path
          d="M26.043 24.32c1.373.264 2.06.396 2.4.276.346-.122.524-.269.709-.585.181-.312.181-.918.181-2.13V7.551c0-.24 0-.36-.079-.58a1.954 1.954 0 00-.333-.512c-.17-.161-.228-.187-.345-.238-.878-.388-2.644-.888-5.91-.888C17.334 5.333 13.334 8 9.334 8a17.92 17.92 0 01-3.376-.32c-1.373-.264-2.06-.396-2.4-.276-.346.121-.524.269-.709.585-.181.312-.181.918-.181 2.13v14.33c0 .24 0 .36.079.58.048.132.232.415.333.512.17.161.228.187.345.238.879.388 2.644.888 5.91.888 5.333 0 9.333-2.667 13.333-2.667 1.275 0 2.415.136 3.376.32z"
          stroke={ColorPalette.Primary500}
        />
        <Path
          d="M8 14.667V20m16-8v5.333M19.333 16a3.333 3.333 0 11-6.666 0 3.333 3.333 0 016.666 0z"
          stroke={ColorPalette.Secondary500}
        />
      </G>
    </Svg>
  );
};

export default CreditIcon;
