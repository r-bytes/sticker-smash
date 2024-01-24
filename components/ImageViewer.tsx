import { Image, ImageRequireSource, ImageURISource, StyleSheet } from "react-native"

/**
 * @see https://reactnative.dev/docs/image#source
 */
type ImageSourcePropType = ImageURISource | ImageURISource[] | ImageRequireSource

export default function ImageViewer({ imageSource }: { imageSource: ImageSourcePropType }) {
  return <Image source={imageSource} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})