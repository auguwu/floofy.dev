---
title: markdown test
description: markdown test pls ignore
createdAt: 2024-02-03T22:43:42.790Z
tags: [test]
---

> things that probably exist

# waow

## BAU BAU BAU

### WAOW WAOW WAOW

#### test ignore

##### stream [ascension to heaven](https://open.spotify.com/track/4VgQDGeib4KMN3iXr410Sr)

###### also stream [`hiss`](https://open.spotify.com/track/5DjC1aw5JXAzPKojrLiSID)

```js
console.log('hello, world?');
```

```rust
#[testkit::test]
async fn test_thing(ctx: testkit::TestContext) {
    panic!("unreachable");
}
```

```go
package main

import (
    "github.com/docker/docker/api/types/container"
    "github.com/docker/docker/client"

    "context"
    "fmt"
)

func main() {
    api, err := client.NewClientWithOpts(client.FromEnv)
    if err != nil {
        panic(err)
    }

    defer api.close()
    containers, err := api.ContainerList(context.Background(), container.ListOptions{All: true})
    if err != nil {
        panic(err)
    }

    for _, c := range containers {
        fmt.Printf("%s %s [%s]", c.ID, c.Image, c.Status)
    }
}
```

| t1   | t2   | t3   |
| ---- | ---- | ---- |
| waow | waow | waow |
