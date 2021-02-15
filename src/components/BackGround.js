import React from 'react';
import {StatusBar, StyleSheet, View, Image, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
import Svg, {Path} from 'react-native-svg';
import colors from './colors';

export default function BackGround({children}) {
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={{position: 'absolute', right: 60, top: 60, elevation: 4}}>
        <Image
          source={require('../assets/penguin.png')}
          style={{height: 80, width: 80}}></Image>
      </View>

      <View
        style={{
          position: 'absolute',
          width: Dimensions.get('window').width,
        }}>
        <View style={{backgroundColor: colors.secondary, height: 180}}>
          <Svg
            height="60%"
            width="100%"
            viewBox="0 0 1440 360"
            style={{position: 'absolute', top: 150}}>
            <Path
              fill={colors.secondary}
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </Svg>
        </View>
        {children}
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ffffff',
  },
});
