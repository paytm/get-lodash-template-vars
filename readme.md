# get-lodash-template-vars
[![Build Status](https://travis-ci.org/paytm/get-lodash-template-vars.svg?branch=master)](https://travis-ci.org/paytm/lgr)
[![Coverage Status](https://coveralls.io/repos/github/paytm/get-lodash-template-vars/badge.svg?branch=master)](https://coveralls.io/github/paytm/get-lodash-template-vars?branch=master)

> Retrieve list of vars in a lodash template

## Install
```
npm install --save get-lodash-template-vars
```

## Usage
```javascript
import getLodashTemplateVars from 'get-lodash-template-vars'

getLodashTemplateVars('<%- name %> <%= age %> <%=name%>')
  // => ['name', 'age']

getLodashTemplateVars('Hello world!')
  // => []
```


## API

### getLodashTemplateVars(template)
Returns an array of strings, which are the variable identifiers.

#### template
type: `string`

The lodash template to examine for variables
