import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'
// pass props.albumdata.title into Card
const AlbumDetail = (props) => {
 return (
   <Card>
     <CardSection>
     <View>
        <Image source={{ uri: props.albumdata.thumbnail_image }} />
     </View>
     <View style={styles.headerContentStyle}>
        <Text>{props.albumdata.title}</Text>
        <Text>{props.albumdata.artist}</Text>
     </View>
     </CardSection>
   </Card>
 );
};
const styles = {
  headerContentStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
  }
};
export default AlbumDetail;
