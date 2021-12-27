const { awscdk } = require('projen');
const { ArrowParens } = require('projen/lib/javascript');
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'projenprettiertest',
  eslint: true,
  eslintOptions: { prettier: true },
  prettier: true,
  prettierOptions: {
    arrowParens: ArrowParens.ALWAYS,
    printWidth: 80,
    singleQuote: true,
  },
  prettierIgnoreEnabled: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});

project.prettier.config.semi = true;

project.synth();
