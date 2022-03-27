import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Animated
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const width = Dimensions.get("window").width;

function SignUp() {
  return (
    <Text>Меня остапиздило - форму делай сам, а стиили и всю эту хуиту (что я написал), уже после того как ты напишешь свой код, я распределю по файлам по нормальному; а так, мне - похуй. Удачи разобраться во всем этом дерьме {'<3'}</Text>
  );
}

function BirthDate() {
  // согласен с тем, что я конченный

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <Text style={{
        fontSize: 32,
        fontWeight: 'bold',
        padding: 5,
        borderBottomColor: '#000',
        borderBottomWidth: 1
      }}>DD</Text>
      <Text style={{
        fontSize: 32,
        fontWeight: 'bold',
        padding: 5,
        borderBottomColor: '#000',
        borderBottomWidth: 1
      }}>MM</Text>
      <Text style={{
        fontSize: 32,
        fontWeight: 'bold',
        padding: 5,
        borderBottomColor: '#000',
        borderBottomWidth: 1
      }}>YYYY</Text>
    </View>
  );
}

function Header({ navigation, component }) {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      paddingHorizontal: 20
    }}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Text style={{fontSize: 32}}>{'<'}</Text>
      </TouchableWithoutFeedback>

      {component}
    </View>
  );
}

function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text>Я могу все распределить по файлам и дописать, если ты встроишь WelcomeScreen в приложение и шоб после регисрации/авторизации оно перенаправляло в приложение  - я просто хз как это делать из-за этого и пишу все в одном файле</Text>
    </View>
  );
}

function SignUpScreen() {
  const item = [
    {
      id: "0",
      title: "What's your goal?", 
      comp: [
        { text: "Lose weight" },
        { text: "Save weight" },
        { text: "Gaine weight" }
      ],
      info: "We’ll use this to calculates and to create better recomendations for you."
    },
    {
      id: "1",
      title: "Choose your gender", 
      comp: [
        { text: "Male" },
        { text: "Female" },
      ],
      info: "We’ll use this to calculates and to create better recomendations for you."
    },
    {
      id: "2",
      title: "Choose your birth date", 
      comp: [
        <BirthDate />
      ],
      info: "We’ll use this to calculates and to create better recomendations for you."
    },
    {
      id: "3",
      title: "Как же", 
      comp: [
        <BirthDate />
      ],
      info: "We’ll use this to calculates and to create better recomendations for you."
    },
    {
      id: "4",
      title: "Похуй", 
      comp: [
        <BirthDate />
      ],
      info: "We’ll use this to calculates and to create better recomendations for you."
    },
    {
      id: "5",
      comp: [
        <SignUp />
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);

  const pan = useRef(new Animated.ValueXY()).current;

  const scrollToIndex = (i) => {
    slidesRef.current.scrollToIndex({ animated: true, index: i });
  };

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  return (

    <View style={styles.container}>
      <Animated.FlatList 
        data={item}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              width: width-40
            }} key={item.id} >
              <Text style={{fontSize: 24, }}>{item.title}</Text>
              <View>
                { item.comp.map((_, i) => {
                  return (
                    <TouchableWithoutFeedback onPress={() => alert('Pressed')}>
                      {_.text !== undefined ? (
                        <Text style={{
                          fontSize: 24,
                          padding: 20,
                          backgroundColor: '#0f0',
                          marginVertical: 10
                        }}>{ _.text }</Text>        
                      ) : (
                        <>
                          { item.comp[i] }
                        </>
                      )
                      }
                    </TouchableWithoutFeedback>
                  );
                }) }
              </View>
              <Text>{item.info}</Text>
            </View>
          );
        }}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        paddingEnabled
        snapToInterval={width-40}
        decelerationRate={"fast"}
        removeClippedSubviews={true}
        // disableIntervalMomentum={true}
        // scrollEnabled={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: pan.x } } }],
          {
            useNativeDriver: false,
          }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        ref={slidesRef}

        style={{
          flex: 1,
          width: width-40
        }}
      />

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      }}>
        <View>
          <TouchableWithoutFeedback onPress={() => alert('Just imagine that it\'s working or go f*ck your self. \n\nScroll left')}>
            <Text style={{fontSize: 24, color: 'grey'}}>{'< Back'}</Text>
          </TouchableWithoutFeedback>
        </View>

        <View>
          <TouchableWithoutFeedback onPress={() => alert('Just imagine that it\'s working or go f*ck your self. \n\nScroll right')}>
            <Text style={{
              fontSize: 24,
              padding: 20,
              backgroundColor: '#0f0'
            }}>Next</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

function Paginator() {
  return (
    <View>
      <Text>123</Text>
    </View>
  );
}

function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.6, alignItems: 'center'}}>
        <Image 
          source={require('./assets/welcome.png')}
          style={{width: '100%', height: '100%', resizeMode: "contain"}}
        />
      </View>
      <View style={{
        flex: 0.2,
        alignItems: 'center',
      }}>
        <Text style={{fontWeight: 'bold', fontSize: 24}}>Welcome to Eat Is!</Text>
        <Text>Your nutrion wizard.</Text>
      </View>
      
      <View style={{flex: 0.2, alignItems: 'center'}}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('SignUp')}>
          <View style={{flex: 1, width: '100%', alignItems: 'center', justifyContent :'center'}}>
            <Text style={{width: '100%', textAlign: 'center', paddingVertical: 15, color: '#fff', fontSize: 24, fontWeight: 'bold', backgroundColor: '#0f0', borderRadius: 5}}>Create account</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('SignIn')}>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', paddingTop: 10}}>
              <Text>Already have account? </Text>
              <Text style={{color: '#0f0'}}>Sign in</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function Zalupa() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={({ route }) => ({
            headerShown: false
          })}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={({ route }) => ({
            header: ({ navigation, route, options}) => {
              return (
                <Header navigation={navigation} component={<Paginator />} />
              );
            }
          })}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={({ route }) => ({
            header: ({ navigation, route, options}) => {
              return (
               <Header navigation={navigation} />
              );
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
});
