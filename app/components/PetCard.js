import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';


const Item = ({item}) => (
  <View style={styles.test}>
    <View style={styles.container}>
      <View style={styles.titleContainer}>
       <Text style={styles.title}>{item}</Text>
       </View>
      <Image source={{uri:'https://picsum.photos/200'}} style={styles.image} resizeMode='repeat' resizeMethod='resize' />
      <View style={styles.categoryContainer}>
      <Text style={styles.category}>Category:{item}</Text>
      </View>
      <TouchableOpacity onPress={() => console.log('Pressed')}>
      <View style={styles.seeMore}> 
      <Text style={styles.seeText}>
        See More..
      </Text>
      </View>
      </TouchableOpacity>
     </View>   
     </View>
   
  );

function PetCard(props) {
    return (
        
        // <FlatList
        //   data={data}
        //   renderItem={({item}) => <Item title={item.title} time={item.time} subtext={item.subtext} /> }
    
        //   keyExtractor={item => item.id}
        
        // />
        <View>
          <Item item={'Test'} />
        </View>
    );
}
const styles = StyleSheet.create({
  category: {
    fontSize: 22,
    fontWeight: '700',
    fontStyle:'italic'
  },
  categoryContainer:{
    padding:10
  },
  container: {
    backgroundColor: '#a9a9a9',
    marginVertical: 8,
    marginHorizontal: 16,
    flex:1,
    borderColor:'black',
    borderRadius:30
  },
  image:{
      width:'100%',
      height:300,
      overflow:'hidden'
    },
   seeMore: {
       backgroundColor:'dodgerblue',
       width:'100%',
       height:40,
       alignItems:'center',
       borderRadius:20
    },
    seeText: {
      fontSize: 20,
      fontWeight: '500',
      
    },
    test: {
      paddingTop:10,
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color:'black', 
      fontStyle:'italic'
    },
    titleContainer: {
      backgroundColor:'dodgerblue',
       width:'100%',
       height:40,
       alignItems:'center',
       borderRadius:20
    }

  });
export default PetCard;