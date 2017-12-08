import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'

// pass props.albumdata.title into Card
const AlbumDetail = (props) => {
 return (
   <Card>
     <CardSection>
      <Text>{props.albumdata.title}</Text>
     </CardSection>
     
     <CardSection>
      <Text>{props.albumdata.title}</Text>
     </CardSection>
   </Card>
 );
};

export default AlbumDetail;
