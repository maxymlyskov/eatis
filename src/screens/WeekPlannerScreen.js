import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import Screen from "../components/Screen";
import {
  useAddWeekPlannerMutation,
  useDeleteWeekPlannerMutation,
} from "../store/saved/getWeekPlanner";

function WeekPlannerScreen({ route, navigation }) {
  const days = route.params.data;
  const saved = route.params;
  const title = route.params.title;
  const image = route.params.image;

  const [addWeekPlanner] = useAddWeekPlannerMutation();
  const [deleteWeekPlanner] = useDeleteWeekPlannerMutation();
  const handleAddWeekPlanner = async (week) => {
    try {
      await addWeekPlanner({
        data: week,
        title: title,
        image: image,
      }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteWeekPlanner = async (id) => {
    try {
      await deleteWeekPlanner(id).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const week = [
    {
      id: 1,
      title: "Monday",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS31lHT8R3quoYMog0DgkijpqWem-ePdk4uA&usqp=CAU",
      data: days.week.monday,
    },
    {
      id: 2,
      title: "Tuesday",
      image:
        "https://logos.flamingtext.com/Name-Logos/Tuesday-design-fluffy-name.png",
      data: days.week.tuesday,
    },
    {
      id: 3,
      title: "Wednesday",
      image: "https://miro.medium.com/max/800/0*S8axIBd5NszOcf_V.jpg",
      data: days.week.wednesday,
    },
    {
      id: 4,
      title: "Thursday",
      image:
        "https://www.thefactsite.com/wp-content/uploads/2017/07/thursday-facts.jpg",
      data: days.week.thursday,
    },
    {
      id: 5,
      title: "Friday",
      image:
        "data:image/jpeg;base64,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",
      data: days.week.friday,
    },
    {
      id: 6,
      title: "Saturday",
      image:
        "https://t4.ftcdn.net/jpg/04/14/02/93/360_F_414029381_HT6sZK4AqX8bKM6ZpOR0tKZcxWcbUvLc.jpg",
      data: days.week.saturday,
    },
    {
      id: 7,
      title: "Sunday",
      image:
        "https://englishlib.org/dictionary/img/wlibrary/s/60479f30c265e6.43244022.jpg",
      data: days.week.sunday,
    },
  ];
  return (
    <Screen style={{ flex: 1 }}>
      {!saved._id ? (
        <Header
          navigation={navigation}
          text={title}
          formLike
          onPress={() => handleAddWeekPlanner(days)}
        />
      ) : (
        <Header
          navigation={navigation}
          text={title}
          formLike={false}
          onPress={() => handleDeleteWeekPlanner(saved._id)}
        />
      )}
      <View style={styles.list}>
        <FlatList
          data={week}
          style={{ flex: 1 }}
          keyExtractor={(item, i) => item + i}
          renderItem={({ item }) => (
            <RecipeCard
              image={{ uri: item.image }}
              title={item.title}
              onPress={() => navigation.navigate("DayPlannerScreen", item)}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  list: { marginHorizontal: 10, flexGrow: 1 },
});

export default WeekPlannerScreen;
