### css

- li:nth-of-type(2) - means it will look for sibling li's and color the second li sibling
- li:nth-child(2) - means it will look for parent and inside parent find the second child and if its a li color it red

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>

<style>
  li:nth-of-type(2) {
    color: red;
  }
</style>
```
