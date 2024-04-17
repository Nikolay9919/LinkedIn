import { Text, View, StyleSheet, Image } from "react-native";
import { Post } from "@/types";
import { FontAwesome } from "@expo/vector-icons";

type PostListItemProps = {
  post: Post;
};

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <View>
      <View style={style.header}>
        <Image source={{ uri: post.author.image }} style={style.userImage} />
        <View>
          <Text>{post.author.name}</Text>
          <Text>{post.author.position}</Text>
        </View>
      </View>

      <Text style={style.content}>{post.content}</Text>

      {post.image && (
        <Image source={{ uri: post.image }} style={style.contentImage} />
      )}

      <View style={style.footer}>
        <FooterButton text="Likes" iconName="thumbs-o-up"></FooterButton>

        <FooterButton text="Comment" iconName="comment-o"></FooterButton>

        <FooterButton text="Repost" iconName="share"></FooterButton>
      </View>
    </View>
  );
}

function FooterButton({ text, iconName }: { text: string; iconName: String }) {
  return (
    <View style={style.footerText}>
      <FontAwesome
        style={style.footerIcon}
        name={iconName}
        size={16}
        color="black"
      />
      <Text>{text}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  //Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  // Body
  content: {
    margin: 10,
    marginTop: 0,
  },
  contentImage: {
    width: "100%",
    aspectRatio: 1,
  },
  //Footer
  footer: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-around",
    borderTopWidth: 0.6,
    borderColor: "lightgray",
  },
  footerText: {
    flexDirection: "row",
    alignItems: "center",
    margin: 3,
  },
  footerIcon: {
    margin: 5,
  },
});
