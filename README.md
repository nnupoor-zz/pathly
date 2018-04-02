# pathly v 1.0.6

A simple method to safely access nested values in an object.

## Installation

Using NPM
```js
npm install pathly
```

Using Yarn
```js
yarn install pathly
```

## Import Module ES6

```js
import getVal from 'pathly'; 
```
## Import Module CommonJS
```js
const getVal = require('pathly'); 
```

## Usage

Once installed, it can be used in js as

```
  const get = getVal;
  const result = {
    books: {
      chapters: [
        { title: 'Hello World!', authors: [ 'Jason fried', 'Paul Kinlan' ] },
        { title: 'JS For Beginners', authors: [ 'Yehuda Katz' ] },
        { title: 'Node For Beginners', authors: [] },
        { title: 'Software Development', authors: [ 'Martin Fowler', 'Donald Knuth', 'Linus Torvalds'] },
      ]
    }
  }

  const getPosts = get(['books', 'chapters'])
  console.log('=====correct======', get(['books', 'chapters', 0, 'authors'], result));
  console.log('=====wrong key======', get(['books', 'chapter', 0, 'authors'], result));
  console.log('=====chaining======', pathly(['books', 'chapters'], result).map(pathly(['authors'])));
  console.log('=====curryd======', getPosts(result));
  console.log('=====path undefined======', get(undefined, result));
  console.log('=====path empty======', get([], result));
  console.log('=====path String======', get('', result));
  console.log('=====path object======', get({}, result));
```
