import { Image, ImageRequireSource, ImageURISource, StyleSheet } from "react-native"

/**
 * @see https://reactnative.dev/docs/image#source
 */
type ImageSourceType = ImageURISource | ImageURISource[] | ImageRequireSource

export default function ImageViewer({
  placeholderImageSource,
  selectedImage,
}: {
  placeholderImageSource: ImageSourceType
  selectedImage: string
}) {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;
  // console.log(imageSource)
  return <Image source={imageSource} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})
