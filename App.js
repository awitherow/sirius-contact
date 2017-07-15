import React from "react";
import { StackNavigator } from "react-navigation";

import Intro from "./source/views/Intro";
import Overview from "./source/views/Overview";

export default StackNavigator({
  Intro: {
    screen: Intro
  },
  Overview: {
    screen: Overview
  }
});
