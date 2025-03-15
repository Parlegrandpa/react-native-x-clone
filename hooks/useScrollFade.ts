import { useRef } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const useScrollFade = (headerHeight = 120, fadeDuration = 200) => {
  const scrollY = useSharedValue(0);
  const lastOffset = useRef(0);
  const headerOpacity = useSharedValue(1);

  const onScroll = (event: { nativeEvent: { contentOffset: { y: any } } }) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const scrollingDown = currentOffset > lastOffset.current;
    const scrollingUp = currentOffset < lastOffset.current;

    if (scrollingDown) {
      headerOpacity.value = withTiming(0, { duration: fadeDuration });
    } else if (scrollingUp) {
      headerOpacity.value = withTiming(0.5, { duration: fadeDuration });
    }

    if (currentOffset <= 0) {
      headerOpacity.value = withTiming(1, { duration: fadeDuration });
    }

    lastOffset.current = currentOffset;
    scrollY.value = currentOffset;
  };

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      opacity: headerOpacity.value,
      height: withSpring(headerHeight),
    };
  });

  return { onScroll, animatedHeaderStyle, scrollY, headerHeight, fadeDuration };
};

export default useScrollFade;
