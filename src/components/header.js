// header is child component
// import library for making a component
import React from 'react';
import { Text } from 'react-native';

// Make a component
const Header = () => {
  return <Text>Albums</Text>;
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
