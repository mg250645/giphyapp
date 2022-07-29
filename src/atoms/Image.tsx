import { FC } from "react";
import { Image as NativeImage, ImageProps, StyleSheet } from "react-native";

interface IImage extends ImageProps {
    variant?: 'small' | 'medium' | 'large' | 'full'
}

export const Image: FC<IImage> = ({variant = 'full', ...props}) => (
    <NativeImage style={styles[variant]} {...props} />
)

const styles = StyleSheet.create({
    small: {
      width: 200,
      height: 200,
    },
    medium: {
      width: 400,
      height: 400,
    },
    large: {
      width: 600,
      height: 600,
    },
    full: {
      width: '100%',
      height: 'auto',
    },
  });