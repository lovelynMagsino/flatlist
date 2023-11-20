import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  {
    id: 1,
    name: { firstname: 'Lovelyn', lastname: 'Magsino' },
    address: { Town: 'Bangkok', Country: 'Thailand' }
  },
  {
    id: 2,
    name: { firstname: 'John Carlo', lastname: 'Manosa' },
    address: { Town: 'Hualien', Country: 'Taiwan' }
  },
  { id:3,
    name:{ firstname: 'John bryle', lastname: 'lumantas'},
    address: {Town: 'paris', Country:'france' },
  },
  { id:4, 
    name:{firstname: 'melrose', lastname: 'cheng'},
    address:{Town: 'beijing', Country:'china' },
  },
  { id:5,
    name:{firstname: 'jea norene', lastname: 'oring'},
    address:{Town: 'los angeles', Country:'california' },
  },
  { id:6, 
    name:{firstname: 'maria luisa', lastname: 'montero'},
    address:{Town: 'palawan', Country:'Philippines' },
  },
  { id:7, 
    name:{firstname: 'sherwen', lastname: 'lahoy'},
    address:{Town: 'manila', Country:'Philippines' },
  },
  { id:8,
    name:{ firstname: 'mike', lastname: 'lumaad'},
    address:{Town: 'cebu', Country:'Philippines' },
  },
  { id:9,
    name:{ firstname: 'steven', lastname: 'chu'},
    address:{Town: 'Shanghai', Country:'china' },
  },
  { id:10,
    name:{firstname: 'sehun', lastname: 'oh'},
    address:{Town: 'seoul', Country:'south korea' },
  },
  { id:11,
    name:{firstname: 'deanna', lastname: 'wong'},
    address:{Town: 'tokyo', Country:'japan' },
  },
  { id:12,
    name:{firstname: 'amethyst', lastname: 'maldives'},
    address:{Town: 'Ayutthaya', Country:'thailand' },
  },
  { id:13,
    name:{firstname: 'nelbrey', lastname: 'Doe'},
    address:{Town: 'Savannah, Georgia', Country:'usa' },
  },
  { id:14, 
    name:{firstname: 'hannah', lastname: 'montero'},
    address:{Town: 'bohol', Country:'Philippines' },
  },
  { id:15, 
    name:{firstname: 'nikko bryle', lastname: 'santones'},
    address:{Town: 'bohol', Country:'Philippines' },
  },
  { id:16, 
    name:{firstname: 'elias', lastname: 'ilacad'},
    address:{Town: 'San Francisco', Country:'california' },
  },
  { id:17,
    name:{firstname: 'claire', lastname: 'lumaad'},
    address:{Town: 'negros oriental', Country:'Philippines'},
  },
  { id:18,
    name:{firstname: 'jacob', lastname: 'arances'},
    address:{Town: 'san diego', Country:'california' },
  },
  { id:19,  
    name:{firstname: 'sherline', lastname: 'cruz'},
    address:{Town: 'Taipei', Country:'taiwan' },
  },
  { id:20,  
    name:{firstname: 'kyle peter', lastname: 'cayatano'},
    address:{Town: 'dumaguete', Country:'Philippines' },
  },
  { id:21, 
    name:{firstname: 'mark david', lastname: 'pustanes'},
    address:{Town: 'ching mai', Country:'thailand' },
  },
  { id:22,  
    name:{firstname: 'nikka jean', lastname: 'dela cruz'},
    address:{Town: 'Strasbourg', Country:'france' },
  },
  
];

const getInitials = (firstname, lastname) => {
  const lastInitial = lastname ? lastname.charAt(0).toUpperCase() : '';
  const firstInitial = firstname ? firstname.charAt(0).toUpperCase() : '';
  return `${firstInitial}${lastInitial}`;
};

const Flatlist = () => {

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.item}>
        <View style={styles.initials}>
          <Text style={styles.initialsText}>{getInitials(
            item.name.firstname, 
             item.name.lastname)}
          </Text>
        </View>
        <View style={styles.details}>
          <View style={styles.infoContainer}>
            <Text style={styles.Name}>
               {item.name.lastname}, 
                {item.name.firstname}
            </Text>
            <Text style={styles.Address}>
               {item.addressTown}, 
                {item.address.Country}
            </Text>
          </View>
          <Icon
            name="ellipsis-h"
            size={25}
            color="#333"
            style={styles.ellipsisIcon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
        <Text style={styles.space}></Text>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
    </View>
  );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      icon: {
        marginRight: 15,
      },
      space: {
        marginBottom: 250,
      },
      details: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      infoContainer: {
        flex: 1,
      },
      Name: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform:'uppercase',
      },
      Address: {
        color: 'gray',
        textTransform:'uppercase',
      },
      ellipsisIcon: {
        marginLeft: 50,
      },
      initials: {
        backgroundColor: 'violet',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      },
      initialsText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },
    });
  
export default Flatlist;
