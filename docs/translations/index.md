---
lastUpdated: true
prev:
  text: '1Markdown'
  link: '/guide/markdown'
next:
  text: '2Markdown'
  link: '/guide/markdown'
---

<script setup>
import { useData } from 'vitepress'

const { theme } = useData()
</script>

<h1>{{ theme.footer.copyright }}12321312312</h1>
{{ 1 + 1 }}

```
测试
```
title: Blogging Like a Hacker
lang: en-US
---
[[toc]]
layout: doc
::: tip
This is a tip.
:::
---
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
---
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

--

