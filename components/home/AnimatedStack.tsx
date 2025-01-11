import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { View, Text } from "tamagui";
import React, { useEffect, useState } from "react";
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  runOnJS,
} from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";

const { width } = Dimensions.get("window");

const ROTATION = 60;
const SWIPE_VELOCITY = 800;

interface AnimatedStackProps {
  data: any[];
  renderItem: (props: { item: any }) => React.ReactNode;
  onSwipeLeft?: (item: any) => void;
  onSwipeRight?: (item: any) => void;
}

const AnimatedStack: React.FC<AnimatedStackProps> = ({
  data,
  renderItem,
  onSwipeLeft,
  onSwipeRight,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);

  const currentProfile = data[currentIndex];
  const nextProfile = data[nextIndex];

  const translateX = useSharedValue(0);
  const startX = useSharedValue(0);
  const hiddentranslateX = 2 * width;

  const rotate = useDerivedValue(
    () =>
      interpolate(translateX.value, [0, hiddentranslateX], [0, ROTATION]) +
      "deg"
  );

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
      // {
      //   scale: interpolate(
      //     Math.abs(translateX.value),
      //     [0, hiddentranslateX],
      //     [1, 0],
      //   ),
      // },
    ],
  }));

  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-hiddentranslateX, 0, hiddentranslateX],
          [1, 0.8, 1]
        ),
      },
    ],
    opacity: interpolate(
      translateX.value,
      [-hiddentranslateX, 0, hiddentranslateX],
      [1, 0.6, 1]
    ),
  }));

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      startX.value = translateX.value;
    })
    .onUpdate((event: PanGestureHandlerEventPayload) => {
      translateX.value = startX.value + event.translationX;
    })
    .onEnd((event) => {
      if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
        translateX.value = withTiming(0, { duration: 300 });
        return;
      }

      translateX.value = withTiming(
        hiddentranslateX * Math.sign(event.velocityX),
        { duration: 300 },
        () => {
          runOnJS(setCurrentIndex)(currentIndex + 1);
          const onSwipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft;
          if (onSwipe) runOnJS(onSwipe)(currentProfile);
        }
      );
    });

  useEffect(() => {
    translateX.value = 0;
    setNextIndex(currentIndex + 1);
  }, [currentIndex]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.main}>
       
          <View style={styles.nextCard}>
            <Animated.View style={[styles.animated, nextCardStyle]}>
              {renderItem({ item: nextProfile })}
            </Animated.View>
          </View>
      

       
          <GestureDetector gesture={panGesture}>
            <Animated.View style={[styles.animated, cardStyle]}>
              {renderItem({ item: currentProfile })}
            </Animated.View>
          </GestureDetector>
      

        {data.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text>No profiles available</Text>
          </View>
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              translateX.value = withTiming(
                -hiddentranslateX,
                { duration: 300 },
                () => {
                  runOnJS(setCurrentIndex)(currentIndex + 1);
                  if (onSwipeLeft) runOnJS(onSwipeLeft)(currentProfile);
                }
              );
            }}
          >
            <AntDesign name="close" size={28} color="grey" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.heartButton}
            onPress={() => {
              translateX.value = withTiming(
                hiddentranslateX,
                { duration: 300 },
                () => {
                  runOnJS(setCurrentIndex)(currentIndex + 1);
                  if (onSwipeRight) runOnJS(onSwipeRight)(currentProfile);
                }
              );
            }}
          >
            <AntDesign name="hearto" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    flex: 1,
  },
  animated: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  nextCard: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: "10%",
    width: "100%",
  },
  closeButton: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    
  },
  heartButton: {
    backgroundColor: "#FF5C5C",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default AnimatedStack;
