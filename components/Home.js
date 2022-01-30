/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
} from 'react-native';
import colors from '../assets/colors/colors';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';

MaterialCommunityIcons.loadFont();
Icon.loadFont();
Feather.loadFont();

const Home = () => {
  const renderCategoryItem = ({item}) => {
    const {id, image, title, selected} = item;
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: selected ? colors.primary : colors.background,
            marginLeft: id === 1 ? 20 : 0,
          },
        ]}>
        <Image style={styles.categoryItemImage} source={image} />
        <Text style={styles.categoryItemTitle}>{title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: selected ? colors.background : colors.secondary,
            },
          ]}>
          <Feather
            name="chevron-right"
            style={styles.categorySelectIcon}
            color={selected ? colors.black : colors.white}
            size={12}
          />
        </View>
      </View>
    );
  };

  const {
    header,
    profileImage,
    menuIcon,
    wrapperTexts,
    subtitle,
    title,
    inputWrapper,
    wrapperCategories,
    categoriesTitle,
    categoriesListWrapper,
  } = styles;
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          {/* Header */}
          <View>
            <View style={header}>
              <Image
                style={profileImage}
                source={require('../assets/images/profile.png')}
              />
              <Icon style={menuIcon} name="menu" size={36} color="#000" />
            </View>

            {/* Titles */}
            <View style={wrapperTexts}>
              <Text style={subtitle}>Food</Text>
              <Text style={title}>Delivery</Text>
            </View>

            {/* Search */}
            <View style={inputWrapper}>
              <Icon name="search" size={16} color="#000" />
              <TextInput
                placeholder="Search..."
                editable
                maxLength={40}
                style={styles.inputSearch}
              />
            </View>

            {/* Categories */}
            <View style={wrapperCategories}>
              <Text style={categoriesTitle}>Categories</Text>
              <View style={categoriesListWrapper}>
                <FlatList
                  data={categoriesData}
                  renderItem={renderCategoryItem}
                  keyExtractor={item => item.id}
                  horizontal={true}
                />
              </View>
            </View>

            {/* Popular */}

            <View style={styles.popularWrapper}>
              <Text style={styles.popularTitle}>Popular</Text>
              {popularData.map(({id, title, weight, rating, image}) => (
                <View
                  style={[
                    styles.popularCardWrapper,
                    {
                      marginTop: id === 1 ? 10 : 20,
                    },
                  ]}
                  key={id}>
                  <View>
                    <View>
                      <View style={styles.popularTopWrapper}>
                        <MaterialCommunityIcons
                          name="crown"
                          size={12}
                          color={colors.primary}
                        />
                        <Text style={styles.popularTopText}>
                          top of the week
                        </Text>
                      </View>
                      <View style={styles.popularTitlesWrapper}>
                        <Text style={styles.popularTitlesTitle}>{title}</Text>
                        <Text style={styles.popularweight}>
                          Weight {weight}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.popularCardBottom}>
                      <View style={styles.addPizzaButton}>
                        <Feather
                          name="plus"
                          color={colors.textDark}
                          size={10}
                        />
                      </View>
                      <View style={styles.ratingWrapper}>
                        <MaterialCommunityIcons
                          name="star"
                          size={10}
                          color={colors.textDark}
                        />
                        <Text style={styles.rating}>{rating}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.popularCardRight}>
                    <View>
                      <Image source={image} style={styles.popularCardImage} />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuIcon: {
    marginTop: 60,
    marginRight: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 60,
    marginLeft: 20,
  },
  wrapperTexts: {
    marginLeft: 20,
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 5,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
  },
  inputWrapper: {
    marginHorizontal: 20,
    marginTop: 36,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputSearch: {
    borderBottomColor: colors.textLight,
    borderBottomWidth: 1,
    width: '92%',
    marginLeft: 10,
    paddingVertical: 5,
  },
  wrapperCategories: {
    marginTop: 30,
  },
  categoriesTitle: {
    marginHorizontal: 20,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
  categoriesListWrapper: {
    marginTop: 30,
    paddingBottom: 20,
  },
  colorFonts: {
    color: colors.primary,
  },
  categoryItemWrapper: {
    backgroundColor: colors.primary,
    marginTop: 15,
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 24,
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  categoryItemTitle: {
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
  },
  categorySelectWrapper: {
    marginVertical: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 26,
    height: 26,
    borderRadius: 100,
  },
  categorySelectIcon: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    marginBottom: 12,
  },
  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },

  popularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
  },
  popularweight: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});

export default Home;
