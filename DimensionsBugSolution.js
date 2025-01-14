// DimensionsBugSolution.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const DimensionsBugSolution = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleLayout = (event) => {
      const { width, height } = event.nativeEvent.layout;
      setDimensions({ width, height });
    };

    // Use onLayout on the root view to ensure accurate dimensions
    const root = document.getElementById('root');
    if(root) {
        root.onLayout = handleLayout;
    }
  }, []);

  return (
    <View style={[styles.container, { width: dimensions.width, height: dimensions.height }]}>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DimensionsBugSolution;