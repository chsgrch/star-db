import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context";

const withSwapiService = (View) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          return <View {...props} swapiService={swapiService} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
