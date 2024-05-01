import { useContext } from "react";
import {
  Button,
  SafeAreaView,
  Text,
} from "react-native";
import AuthContext from "../../Context/AuthContext";

const Home = () => {
  const { user} = useContext(AuthContext);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome {user.name}</Text>
    </SafeAreaView>
  );
};

export default Home;
