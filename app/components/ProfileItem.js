import React, { useState } from "react";

import { Avatar, Card, IconButton, Divider, List } from "react-native-paper";

function ProfileItem({ item }) {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <>
      <Card.Title
        title={item.username}
        subtitle={item.email}
        left={(props) => (
          <Avatar.Image size={30} source={require("../assets/dog.jpg")} />
        )}
        right={(props) => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
      <Divider />
      <List.Section title="Personal Details">
        <List.Accordion
          title="Name and Other Details"
          left={(props) => (
            <List.Icon {...props} color={"black"} icon="folder" />
          )}
        >
          <List.Item title={item.firstName} />
          <List.Item title={item.lastName} />
        </List.Accordion>

        <List.Accordion
          title="Security"
          left={(props) => (
            <List.Icon {...props} color={"black"} icon="folder" />
          )}
          onPress={handlePress}
        >
          <List.Item title="Password" />
          <List.Item title={item.phone} />
        </List.Accordion>
      </List.Section>
    </>
  );
}
export default ProfileItem;
