import { useState } from 'react';
import { Share, Alert, StatusBar } from 'react-native';
import { NativeBaseProvider, extendTheme, Box, VStack, Text, TextArea, Input, Button, Link } from 'native-base';

export default function App() {
  const theme = extendTheme({
    colors: {
      primary: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      }
    }
  });

  const [link, setLink] = useState('');
  const [cleanLink, setCleanLink] = useState('');
  const [isEditActive, setIsEditActive] = useState(false);

  const onPressClean = () => {
    const queryStringIndex = link.indexOf('?');
    console.log('queryStringIndex', queryStringIndex);

    setCleanLink('https://www.google.com');
  }

  const onReset = () => {
    setLink('');
    setCleanLink('');
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        url: cleanLink
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('shared with activity type of ',result.activityType);
        } else {
          console.log('shared');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed');
      }
    } catch (err) {
      Alert.alert(err.message);
    }
  }

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar animated={true} barStyle="dark-content" showHideTransition="slide" />
      <Box safeArea p={5}>
        <VStack space={4} alignItems="center">
          <Text>Enter your link here</Text>
          <Input
            onChangeText={setLink}
            value={link}
            placeholder="Link"
            isFullWidth={true}
          />
          <Button onPress={onPressClean} w="100%">Clean 🧹</Button>
        </VStack>
          { cleanLink &&
            <VStack mt={4} space={4} alignItems="center">
              <Text>Clean Link</Text>
              <TextArea h={20} w="100%" value={cleanLink} onChangeText={setCleanLink} />
              <Button onPress={onReset} w="100%">Reset</Button>
              <Box alignItems="center">
                <Link href={cleanLink} isExternal>Test Clean Link</Link>
              </Box>
              <Button onPress={onShare} w="100%">Share</Button>
            </VStack>
          }
      </Box>
    </NativeBaseProvider>
  );
}
