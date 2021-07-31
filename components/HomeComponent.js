import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";
import Loading from "./LoadingComponent";

const mapStateToProps = (state) => {
  return {
    campsites: state.campsites,
    promotions: state.promotions,
    partners: state.partners,
  };
};

function RenderItem(props) {
  const { item } = props;

  if (props.isLoading) {
    return <Loading />;
  }
  if (props.errorMessage) {
    return (
      <View>
        <Text>{props.errorMessage}</Text>
      </View>
    );
  }
  if (item) {
    return (
      <Card featuredTitle={item.name} image={{ uri: baseUrl + item.image }}>
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
}

class Home extends Component {
  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <ScrollView>
        <RenderItem
          item={
            this.props.campsites.campsites.filter(
              (campsite) => campsite.featured
            )[0]
          }
          isLoading={this.props.campsites.isLoading}
          errorMessage={this.props.campsites.errorMessage}
        />
        <RenderItem
          item={
            this.props.promotions.promotions.filter(
              (promotion) => promotion.featured
            )[0]
          }
          isLoading={this.props.promotions.isLoading}
          errorMessage={this.props.promotions.errorMessage}
        />
        <RenderItem
          item={
            this.props.partners.partners.filter(
              (partner) => partner.featured
            )[0]
          }
          isLoading={this.props.partners.isLoading}
          errorMessage={this.props.partners.errorMessage}
        />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(Home);
