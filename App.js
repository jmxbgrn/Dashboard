import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  { number: 5, status: 'Pending' },
  { number: 3, status: 'In Progress' },
  { number: 7, status: 'Completed' },
  { number: null, status: 'Others' },
];

const categories = [
  'Road Obstruction',
  'Stray Animals',
  'Waste Management',
  'Others',
];

// ... (import statements and other code)

const Dashboard = () => {
  const handleIconClick = (iconName) => {
    console.log(`Icon clicked: ${iconName}`);
    // You can perform different actions based on the iconName clicked
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>DASHBOARD</Text>
        </View>
        <TouchableOpacity onPress={handleIconClick.bind(null, 'user')} style={styles.profileIcon}>
          <Icon name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>Search By Category:</Text>
      <View style={styles.columnContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            style={category === 'Others' ? styles.othersCategoryBox : styles.categoryBox}
            key={index}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.circleBox}>
        {data.map((item, index) => (
          <View style={styles.circleContainer} key={index}>
            {item.number !== null && (
              <>
                <TouchableOpacity onPress={handleIconClick.bind(null, 'exclamation-triangle')}>
                  <View style={styles.circle}>
                    <Text style={styles.circleText}>{item.number}</Text>
                  </View>
                </TouchableOpacity>
                <Text style={styles.statusText}>{item.status}</Text>
              </>
            )}
          </View>
        ))}
      </View>
      {/* Icon section */}
      <View style={styles.iconSection}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleIconClick.bind(null, 'exclamation-triangle')}>
            <Icon name="exclamation-triangle" size={40} color="lightgreen" />
          </TouchableOpacity>
          <Text style={styles.iconText}>Pending</Text>
        </View>
        <Icon name="cog" size={30} color="orange" style={styles.icon} />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleIconClick.bind(null, 'star')}>
            <Icon name="star" size={40} color="gold" />
          </TouchableOpacity>
          <Text style={styles.iconText}>Completed</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 90,
    marginLeft: 28,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 25,
    marginTop: .5,
    marginLeft: 35, // Adjusted margin-left
    color: 'black',
    textAlign: 'left',
  },
  columnContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  categoryBox: {
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 0,
    margin: 10,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
    padding: 10,
    width: 370,
    height: 50,
  },
  othersCategoryBox: {
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 0,
    margin: 10,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
    padding: 10,
    width: 370,
    height: 50,
  },
  categoryText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 15,
    textTransform: 'uppercase',
  },
  circleBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FED8B1',
    padding: 40,
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 15,
    width: 380,
    height: 120,
  },
  circleContainer: {
    alignItems: 'center',
    backgroundColor: '#FED8B1',
    borderRadius: 50,
    padding: 0,
    marginLeft: 15,
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  circleText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  statusText: {
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 15,
  },
  profileIcon: {
    marginRight: 10,
  },
  iconSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 60,
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  iconText: {
    marginTop: 5,
    fontSize: 18,
    color: 'black',
  },
  icon: {
    marginBottom: 50,
    marginLeft: 15,
  },
});

export default Dashboard;
