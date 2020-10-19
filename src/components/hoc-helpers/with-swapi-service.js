import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context";

const withSwapiService = (mapMethodsToProps) => (View) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          const serviceProps = mapMethodsToProps(swapiService);
          return <View {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
