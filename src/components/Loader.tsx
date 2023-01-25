import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={696}
    height={656}
    // viewBox="0 0 696 656"
    backgroundColor="#5a5a5a"
    foregroundColor="#2e2e2e"
  >
    <rect x="0" y="0" rx="0" ry="0" width="696" height="600" />
    <rect x="0" y="624" rx="0" ry="0" width="330" height="32" />
  </ContentLoader>
);

export default MyLoader;
