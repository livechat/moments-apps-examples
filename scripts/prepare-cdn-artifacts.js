const path = require("path");
const fs = require("fs-extra");
const { getPackages } = require("@lerna/project");

const DIST_DIR = path.resolve(__dirname, "../dist");

const collectData = packages =>
  packages.map(({ location }) => ({
    name: path.basename(location),
    distDir: path.join(location, "dist")
  }));

const copyDistDirs = data =>
  Promise.all(
    data.map(({ name, distDir }) => fs.copy(distDir, path.join(DIST_DIR, name)))
  );

const prepareCdnArtifacts = () =>
  getPackages()
    .then(collectData)
    .then(copyDistDirs);

prepareCdnArtifacts().then(
  () => {
    console.log("CDN artifacts prepared successfully.");
  },
  err => {
    console.error(
      `CDN artifacts couldn't be generated, script has thrown this:`
    );
    console.error(err);
    process.exit(1);
  }
);
