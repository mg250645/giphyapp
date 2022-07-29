# Description
This is an example repo for showing `atomic design` patterns within a `react` ecosystem

src-/ \
----/atoms (small reuseable componenets) \
----/molecules \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _components that follow patterns for composing atoms. EX:: a label witn an input_ \
----/organisims \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _components that combine molecules to form "widgets" or components that will be provided with application context_ \
----/views \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _reusable views/pages that are composed of organisims and can also also be provided with application context_ \
----/hooks \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _location of API Hooks to serve to Context_ \
----/context \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _Application Context which serves the API's that are provided by the Hooks_ \


# Installation & start
After cloning, run this in the root directory. \
If you do not have yarn, run `npm install --global yarn`

Run the following to install and start:
```
yarn && yarn start
```
