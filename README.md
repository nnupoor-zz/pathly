# get-nested-val 

A simple method to safely access nested values in an object.

## Installation

```js
npm i --save-dev get-nested-val
```

### Module

```js
import getVal from 'get-nested-val';
```

## Usage

Once installed, it can be used in js as
```
  const get = getVal.get;
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
  console.log('=====chaining======', get(['books', 'chapters'], result).map(el => get(['authors'], el)))
  console.log('=====curryd======', getPosts(result));
  console.log('=====path undefined======', get(undefined, result));
  console.log('=====path empty======', get([], result));
  console.log('=====path String======', get('', result));
  console.log('=====path object======'), get({}, result);
```
