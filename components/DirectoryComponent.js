import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { Tile } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";

const mapStateToProps = (state) => {
  return {
    campsites: state.campsites,
  };
};

class Directory extends Component {
  static navigationOptions = {
    title: "Directory",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <Tile
          title={item.name}
          caption={item.description}
          featured
          onPress={() => navigate("CampsiteInfo", { campsiteId: item.id })}
          imageSrc={{ uri: baseUrl + item.image }}
        />
      );
    };

    if (this.props.campsites.isLoading) {
      return <Loading />;
    }

    if (this.props.campsites.errorMessage) {
      return (
        <View>
          <Text>{this.props.campsites.errorMessage}</Text>
        </View>
      );
    }

    return (
      <FlatList
        data={this.props.campsites.campsites}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default connect(mapStateToProps)(Directory);
