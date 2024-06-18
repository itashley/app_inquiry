import React from "react";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { CommonActions, useNavigation } from "@react-navigation/native";

const CustomTabBar = (props) => {
  const navigation = useNavigation();

  const handleTabPress = ({ route, defaultHandler }) => {
    console.log("handleTabPress called with route:", route);
    const state = navigation.dangerouslyGetState();
    const routeName = route.name;

    console.log("Current Navigation State:", state);
    console.log("Pressed Route:", routeName);

    const tabRoute = state.routes.find((r) => r.name === routeName);
    console.log("Tab Route:", tabRoute);

    if (tabRoute && tabRoute.state) {
      const topRoute = tabRoute.state.routes[tabRoute.state.index];
      console.log("Top Route of the Tab:", topRoute);

      if (topRoute.name !== routeName) {
        console.log(`Resetting ${routeName} stack to the first screen.`);
        navigation.dispatch({
          ...CommonActions.reset({
            index: 0,
            routes: [{ name: routeName }],
          }),
          target: state.key,
        });
        return;
      }
    }

    console.log(`Using default handler for ${routeName}`);
    defaultHandler();
  };

  // Ensure onTabPress is called
  const tabPressEnhancer = (originalHandler, route) => (e) => {
    if (originalHandler) {
      originalHandler(e);
    }
    handleTabPress({
      route,
      defaultHandler: () => props.navigation.navigate(route.name),
    });
  };

  // Enhance props with onTabPress handler
  const enhancedProps = {
    ...props,
    state: {
      ...props.state,
      routes: props.state.routes.map((route, index) => ({
        ...route,
        onTabPress: tabPressEnhancer(
          props.descriptors[route.key].options?.tabBarButton,
          route
        ),
      })),
    },
  };

  return <BottomTabBar {...enhancedProps} />;
};

export default CustomTabBar;
