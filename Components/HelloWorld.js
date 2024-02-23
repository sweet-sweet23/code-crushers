import React from 'react';
import { View, Text, Image, TextInput } from 'react-native'; // Added TextInput import for input field

const HelloWorld = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    
      <Image
        source={{ uri: 'https://www.mobilesmspk.net/user/images/wallpaper_images/2023/05/11/www.mobilesmspk.net_cute-kitty_5349.jpg' }}
        style={{ width: 200, height: 200, marginTop: 20 }}
        resizeMode="contain"
      />
      {/* TextInput equivalent */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <View style={{ marginRight: 10 }}>
          {/* Checkbox */}
          
          <Text>Hi there!</Text>
        </View>
        {/* Text input */}
       
      </View>
    </View>
  );
};

export default HelloWorld;