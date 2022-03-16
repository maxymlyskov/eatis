import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import Screen from '../components/Screen';
import Category from '../components/CategoryFlatList/Category';
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";

import styles from '../config/styles';
import fonts from '../styles/fonts';
import colors from '../config/colors';


export default function PluseScreen() {
  // const [state, setState] = React.useState({
  //   s: "",
  //   results: [],
  //   selected: {},
  // });

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20
        }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add Nutrion</Text>
        </View>

        <View>
          <Text style={[fonts.Bold18, { paddingVertical: 15 }]}>Category</Text>
          <Category />
        </View>

        <View style={{paddingVertical: 20}}>
          <AppForm initialValues={{ search: "" }}>
            <AppFormField
              placeholder="Search ingredients or recipes"
              icon="magnify"
              name="search"
              autoCapitalize="none"
              autoCorrect={false}
              // value={state.s}
              // onChangeText={(text) =>
              //   setState((prevState) => {
              //     return { ...prevState, s: text };
              //   })
              // }
              // onSubmitEditing={console.log(data)}
            />
          </AppForm>
        </View>

        <View>

        </View>
      </ScrollView>
    </Screen>
  );
}

const style = StyleSheet.create({})