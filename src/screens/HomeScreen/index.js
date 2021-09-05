import React, { useState } from "react";
import { TextInput, View, FlatList } from "react-native";
import { MyPageLayout, SalesCard, Header, CarBrandBox } from "../../components";
import styles from "./styles";
import { Search } from "../../res/assets/icons";
import colors from "../../res/style/colors";
import { dw } from "../../functions/developerFunc";
import { carBrands, salesCars } from "../../res/assets/sampleData";

const index = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <MyPageLayout>
      <Header
        backButtonOnPress={() => alert("backButtonOnPress")}
        centerIsPopulerBuyers
        addOnPress={() => alert("addOnPress")}
        editOnPress={() => alert("editOnPress")}
      />
      <View style={styles.searchContainer}>
        <Search
          height={dw(19)} 
          width={dw(19)}
          fill={colors.black}
        />
        <TextInput
          style={styles.textInput}
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
          placeholder={"Arama"}
          placeholderTextColor={colors.black}
        />
      </View>
      <View style={styles.carBrandsWrapper}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <CarBrandBox
                onPress={() => alert("CarBrandBox")}
                item={item}
                index={index}
              />
            );
          }}
          data={carBrands}
        />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => {
          return (
            <SalesCard
              item={item}
              lastComponent={index === salesCars.length - 1}
            />
          );
        }}
        data={salesCars}
      />
    </MyPageLayout>
  );
};

export default index;
