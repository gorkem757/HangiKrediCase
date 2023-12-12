import React from 'react';
import { Image, ImageProps } from 'react-native';

interface CustomImageProps extends ImageProps {
 
}

// Would've used FastImage to enhance performance with caching 

const CustomImage: React.FC<CustomImageProps> = ({ ...props }) => {
  return <Image {...props} />;
};

export default CustomImage;
