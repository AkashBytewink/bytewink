import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import msd from "../assets/Indian-cricketer-Mahendra-Singh-Dhoni-2011.webp";
import CustomButton from "../components/CustomButton";
import { useRouter } from "expo-router";

export default function App() {
  const router = useRouter();
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={{
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={styles.head}>Welcome to MS Studio</Text>
      <Image source={msd} style={styles.authImg} />

      <Text style={styles.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias modi
        vitae adipisci rerum consequatur cum sequi! Nisi voluptatum, vitae
        dolores aspernatur placeat provident!
      </Text>

      <CustomButton
        title="Sign-in"
        btnColor="#16baff"
        otherStyle={{ width: "60%", marginVertical: 5 }}
        handlePress={() => router.replace("/sign-in")}
      />

      <View
        style={{
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
          marginVertical: 5,
        }}
      >
        <View style={styles.hr}></View>
        <Text style={{ fontSize: 16 }}>OR</Text>
        <View style={styles.hr}></View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginVertical: 5,
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Don't have account?
        </Text>
        <CustomButton
          title="Sign-up"
          btnColor="green"
          handlePress={() => router.replace("/sign-up")}
        />
      </View>

      <Text style={styles.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officia
        accusantium animi amet vel repudiandae incidunt accusamus cumque harum
        obcaecati, enim hic sequi voluptas quo? Laborum, aliquam? Ducimus,
        eveniet voluptate! Placeat, consequatur nemo. Eum sit perferendis
        obcaecati aliquid autem deleniti facere expedita, doloremque impedit
        harum iste molestiae maiores natus mollitia ullam at nemo repellat
        quibusdam? Eum quasi nesciunt commodi consectetur officia optio quia
        culpa rem omnis impedit soluta in quis voluptas maiores autem architecto
        explicabo, sapiente aperiam fugit mollitia velit est animi laborum ea?
        Numquam id a cupiditate ipsam quia provident, inventore eos, eveniet
        saepe praesentium maiores deserunt tempora beatae minima amet.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  authImg: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    objectFit: "cover",
    borderRadius: 300,
    margin: "auto",
    marginVertical: 10,
  },
  head: {
    fontSize: 35,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    marginHorizontal: 5,
  },

  hr: {
    height: 2,
    backgroundColor: "gray",
    width: "43%",
    margin: "auto",
  },
  para: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
});
