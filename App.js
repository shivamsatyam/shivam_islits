import * as React from 'react';
import { View,StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview';
export default function App() {
  return (
    <View style={styles.container}>
        <WebView 
      
      source={{ uri: 'https://www.gamezop.com/g/Bk25EzR7T?id=cfuucl7YgA&lang=en' }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
  
});
