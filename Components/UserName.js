import React from 'react';
import {Text, View} from 'react-native';

const Cat = props => {
  return (
    <View>
      <Text>Hello, we are the code-crushers {props.name}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View>
      <Cat name="Veian" />
      <Cat name="Irish" />
      <Cat name="Juliet" />
    </View>
  );
};

export default Cafe;