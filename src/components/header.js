// header is child component
// import library for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
  //const textStyle = styles.textStyle;
  const { textStyle, viewStyle } = styles;   //destructuring

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
// Make the component available to other parts of the app
// the presence of that 'default' keyword affects the code that
// you'll write when you try to 'import' it somewhere else.
// Because we used the 'default' keyword here, we can import the header somewhere else as:
// import Header from './Header';
// if we had not used the 'default' keyword, we would instead have what is called a named export.
// It would look like this:
// export { Header };
// Then to import it somewhere else we would write
// import { Header } from './Header';

export default Header;
