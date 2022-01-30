/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Details = ({route, navigation}) => {
  const {item} = route.params;
  const {
    price,
    title,
    sizeName,
    sizeNumber,
    crust,
    deliveryTime,
    image,
    ingredients,
  } = item;

  const renderIngredientsItem = ({item}) => {
    return (
      <View
        style={[
          styles.ingredientItemWrapper,
          {
            marginLeft: item.id === '1' ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.ingredientImage} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={14} color={colors.black} />
            </View>
          </TouchableOpacity>

          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name="star"
              size={12}
              color={colors.white}
            />
          </View>
        </View>
      </SafeAreaView>
      {/* Titles */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* Price */}
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>${price}</Text>
      </View>

      {/* Info */}
      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {sizeName} {sizeNumber}"
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{crust}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery in</Text>
            <Text style={styles.infoItemText}>{deliveryTime} min</Text>
          </View>
        </View>
        <View style={styles.infoRightWrapper}>
          <Image source={image} style={styles.image} />
        </View>
      </View>
      {/* Ingredients */}
      <View style={styles.ingredientsWrapper}>
        <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <View style={styles.ingredientsListWrapper}>
          <FlatList
            data={ingredients}
            renderItem={renderIngredientsItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/* Place an Order */}
      <TouchableOpacity onPress={() => alert('We are building the cart page!')}>
        <View style={styles.orderWrapper}>
          <Text style={styles.orderButtonText}>Place an order</Text>
          <Feather name="chevron-right" size={14} color={colors.dark} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    padding: 12,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 10,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
    width: '60%',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  price: {
    fontSize: 32,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.secondary,
  },
  infoWrapper: {
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: colors.textLight,
  },
  infoItemText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: colors.textDark,
  },
  image: {
    resizeMode: 'contain',
    marginLeft: 50,
  },
  ingredientsWrapper: {
    marginTop: 50,
  },
  ingredientsTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
    paddingHorizontal: 20,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
  ingredientItemWrapper: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientImage: {
    resizeMode: 'contain',
  },
  orderWrapper: {
    marginTop: 50,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 50,
    padding: 20,
  },
  orderButtonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: colors.textDark,
    paddingRight: 10,
  },
});
