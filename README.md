# has-nested-property

The new way to check Object for nested property

## Installation

Install via NPM:

```bash
npm install has-nested-property

```

## Usage

```javascript
const { hasNestedProperty } = require("has-nested-property");

// Test object
const testObject = {
  first_level: {
    some_property: false,
    second_level: {
      third_level: "77 790 000 км",
    },
  },
};

console.log(hasNestedProperty(testObject, 'first_level.second_level.third_level')) // print true
console.log(hasNestedProperty(testObject, 'first_level.second_level.non_exist_property')) // print false

```
