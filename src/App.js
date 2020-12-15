import React from "react";
import { Text } from "ink";
import Configstore from "configstore";
import open from "open";
import packageJson from "../package.json";
import BASE_URL from "./constants";
import { setBasePath, getFullUrl } from "./utils";

const App = ({ basePath = "" }) => {
  const config = new Configstore(packageJson.name);

  if (basePath) {
    setBasePath(config, basePath);
  }

  const baseUrl = config.get(BASE_URL);

  React.useEffect(() => {
    const openUrl = async () => {
      const shouldOpenUrl = !basePath && baseUrl?.length > 0;
      if (shouldOpenUrl) await open(getFullUrl(baseUrl));
    };
    openUrl();
  }, [basePath]);

  let text;
  if (basePath) {
    text = <Text>Base path is set to :{baseUrl}</Text>;
  } else if (baseUrl) {
    text = (
      <Text>
        Opening
        {getFullUrl(baseUrl)}
      </Text>
    );
  } else {
    text = (
      <Text>
        No valid base path is set. Please use the --basePath option to set the
        base url
      </Text>
    );
  }
  return text;
};

export default App;
