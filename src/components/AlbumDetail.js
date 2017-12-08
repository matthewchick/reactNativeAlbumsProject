import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'
// pass props.albumdata.title into Card
const AlbumDetail = ({albumdata}) => {
   const { title, artist, thumbnail_image } = albumdata;
   const { thumbnailStyle, headerContentStyle } = styles;

   return (
     <Card>
       <CardSection>
       <View>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
       </View>
       <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
       </View>
       </CardSection>
     </Card>
   );
};
const styles = {
  headerContentStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};
export default AlbumDetail;
