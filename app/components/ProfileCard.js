import React  from 'react';
import { View, StyleSheet} from 'react-native';

import { Button} from 'react-native-paper';


function ProfileCard(props) {

    return (
       
          <View style={styles.logout}>
        <Button icon="logout" mode="contained" onPress={() =>console.log('test')}>
        Log Out
      </Button>
        </View>
       
    );
}
const styles = StyleSheet.create({
    logout:{flex:1,
        justifyContent:'flex-end'
      },
   
})

export default ProfileCard;