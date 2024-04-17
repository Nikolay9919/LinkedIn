import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";

import PostListItem from "@/components/PostListItem";

import posts from "../../../assets/data/posts.json";

const firstPost = posts[0];

export default function NewPost() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>

      <PostListItem post={firstPost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
