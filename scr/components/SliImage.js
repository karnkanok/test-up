import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width, height} = Dimensions.get('window');

export default function SliImage({navigation}) {
  const carouselRef = useRef(null);

  const [data] = useState([
    {
      type: 'url',
      url_image:
        'https://img.blognone.com/jobs/prod/524x274/cover/livingos-co-ltd.jpg',
      navigate_to: 'https://www.thelivingos.com/ ',
      latitude: '',
      longitude: '',
      name: 'THELIVINHOS',
    },
    {
      type: 'map',
      navigate_to: '',
      url_image:
        'https://i.pinimg.com/564x/97/22/fa/9722fa269521af02cf1009fa5b561222.jpg',
      latitude: 19.5997222,
      longitude: 100.0030556,
      name: 'Forest',
    },
    {
      type: 'picture',
      navigate_to: '',
      url_image:
        'https://i.pinimg.com/564x/75/52/e6/7552e6ec299792a2ff3af58c5a5c2253.jpg',
      latitude: '',
      longitude: '',
      name: 'November Rain',
    },
  ]);

  const render = ({item, index}) => {
    return (
      <View key={index}>
        <TouchableOpacity onPress={() => navigationTo(item)}>
          <Image
            source={{uri: item.url_image}}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <Text style={styles.textStyle}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  function navigationTo(item) {
    if (item.type === 'url') {
      return Linking.openURL('https://www.thelivingos.com').catch(err =>
        console.error(err),
      );
    } else if (item.type === 'map') {
      const position = `${item.latitude},${item.longitude}`;
      return Linking.openURL(`https://maps.google.com/?q=${position}`);
    } else if (item.type === 'picture') {
      return navigation.navigate('FullScreen', {data: item.url_image});
    }
  }

  return (
    <View style={styles.conponent}>
      <Carousel
        ref={carouselRef}
        data={data}
        layout="default"
        renderItem={render}
        activeSlideAlignment="center"
        sliderWidth={width}
        itemWidth={width}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  conponent: {
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    width: '100%',
    height: '80%',
    margin: '3%',
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '900',
    color: '#411',
  },
});
