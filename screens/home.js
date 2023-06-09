import { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "highfleet",
      rating: 5,
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, exercitationem.",
      key: "1",
    },
    {
      title: "biomutant",
      rating: 4,
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, exercitationem.",
      key: "2",
    },
    {
      title: "lust from beyond",
      rating: 3,
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, exercitationem.",
      key: "3",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
