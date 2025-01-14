# Inconsistent Screen Dimensions in React Native on Android

This repository demonstrates a bug encountered when using the `Dimensions` API in React Native to obtain screen dimensions on Android devices. The API sometimes returns incorrect values, leading to layout inconsistencies.  This issue may be device- or Android version-specific and is not consistently reproducible.

## Bug Report
The `Dimensions.get('window')` and `Dimensions.get('screen')` methods may provide inaccurate height and/or width measurements, resulting in elements being rendered incorrectly. This is especially noticeable on certain Android devices when the app initially loads or the screen orientation changes.

## Solution
To work around this inconsistent behavior, consider using the `onLayout` event on the root view or a view encompassing the content that requires accurate dimensions.  This allows you to obtain the dimensions after the layout is fully rendered. This solution ensures that the dimensions are accurate, even when `Dimensions` API is unreliable.

## How to Reproduce (DimensionsBug.js)
1. Run the project on an Android device.
2. Observe the layout of the screen; it may be incorrectly sized, particularly on first launch or rotation.
3. Note that the inconsistency is not guaranteed to be present on all devices.