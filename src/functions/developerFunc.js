import { Dimensions, Platform, NativeModules } from "react-native";

const { width, height } = Dimensions.get("window");

export function dh(x) {
  const designHeight = 812;
  return (x / designHeight) * height;
}

export function dw(x) {
  const designWidth = 375;
  return (x / designWidth) * width;
}

export function ios() {
  const ios = Platform.OS === "ios" ? true : false;
  return ios;
}

export function android() {
  const android = Platform.OS === "android" ? true : false;
  return android;
}

export function statusbarHeight() {
  return NativeModules.StatusBarManager.HEIGHT;
}

function isIphoneX() {
  const dimen = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}
export function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}
