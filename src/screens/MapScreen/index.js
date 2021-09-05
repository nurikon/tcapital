import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Alert } from "react-native";
import styles from "./styles";
import { MyPageLayout } from "../../components/index";
import { Header } from "../../components";
import MapView, { AnimatedRegion } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import colors from "../../res/style/colors";
import { Gps } from "../../res/assets/icons";
import { dw } from "../../functions/developerFunc";
import Geolocation from "@react-native-community/geolocation";

let mapView;

const index = () => {
  const [myLocationIconVis, setMyLocationIconVis] = useState(true);
  const [selectedLocation, setselectedLocation] = useState();

  useEffect(() => {
    animateMyLocation();
  }, []);

  const getDeviceCoordinate = () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        (geoSuccess) => {
          const region = {
            latitude: geoSuccess.coords.latitude,
            longitude: geoSuccess.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          };
          resolve(region);
        },
        (geoError) => {
          reject(geoError);
          Alert.alert("", "Konumunuz Alınamadı", [{ text: "TAMAM" }]);
        }
      );
    });
  };

  const animateToLocation = async (item) => {
    await mapView.animateToRegion(
      {
        latitude: item.latitude,
        longitude: item.longitude,
        latitudeDelta: item.latitudeDelta,
        longitudeDelta: item.longitudeDelta,
      },
      1000
    );
    setSettingsModalVisible(false);
    setSelectedLocation(item);
    setSearchText("");
    setSearchBarVisible(false);
  };

  function animateMyLocation() {
    getDeviceCoordinate()
      .then((region) => animateToLocation(region))
      .catch(() => console.log("konum alınamadı"));
  }

  function onFocusInput() {
    setMyLocationIconVis(false);
  }
  function onBlurInput() {
    setMyLocationIconVis(true);
  }

  return (
    <MyPageLayout>
      <Header
        backButtonOnPress={() => alert("backButtonOnPress")}
        centerTitle={"Konum"}
        righTitle={"Bitti"}
        righTitleOnPress={() => alert("righTitleOnPress")}
      />
      <View style={styles.page}>
        <MapView
          style={styles.map}
          showsUserLocation
          ref={(ref) => {
            mapView = ref;
          }}
        ></MapView>
        <View style={styles.autoComplateWrapper}>
          <GooglePlacesAutocomplete
            onFail={(err) => console.log(err)}
            placeholder="Search"
            onPress={(data, details) => {
              console.log(details.geometry);
            }}
            styles={{
              textInput: styles.autoComplateInput,
            }}
            query={{
              key: "AIzaSyAdKcycL34nbE5T6729H-rW7jXetIdQcpE",
              language: "tr",
            }}
            textInputProps={{
              onFocus: onFocusInput,
              onBlur: onBlurInput,
            }}
          />
          {myLocationIconVis && (
            <TouchableOpacity
              onPress={() => animateMyLocation()}
              style={styles.gpsIcon}
            >
              <Gps width={dw(18)} height={dw(18)} fill={colors.orange} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </MyPageLayout>
  );
};

export default index;
