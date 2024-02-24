---
title: Using Bun for building custom GitHub Actions
description: Blog post on how to use Bun's bundler to create a flat file for GitHub Actions and why you should use it.
createdAt: 2024-02-24T01:41:53.927Z
tags: [bun, github, actions]
draft: true
---

When I first started to build out my GitHub Actions that I use and seen other people use, I was using Node.js and [`@vercel/ncc`] for building them and it was fine... for now!

> [!NOTE]
> This site uses [Bun](https://bun.sh) + [Astro](https://astro.build), deployed on a Kubernetes cluster.

In 2024, I been migrating all of my actions to use Bun to _write_ them, but I haven't switched from [`@vercel/ncc`] to Bun for building it and I am making this blog post on how you can do it too.

## First, a tale on why I and other people are using [`@vercel/ncc`]...

In the official documentation for building your custom GitHub Actions, GitHub actually recommends using `@vercel/ncc` for creating a flat JavaScript file where the Actions runner will execute it.

> _Checking in your node_modules directory can cause problems. As an alternative, you can use a tool called [`@vercel/ncc`] to compile your code and modules into one file used for distribution._
>
> ~ GitHub Documentation - [Creating a JavaScript action]

Like everyone else, I thought it would be better to use it instead of doing it myself, and so I stuck with it for 2 years when I first created my actions.

## Now, why am I switching to Bun?

Bun has been a dilemma for me, it was _there_ and still is there but I don't use it as much as I'd wanted to. While I do like the package manager, I never really committed to Bun yet.

Now that Bun is being used more, I wanted to try it out! So, I migrated most actions that I created to Bun:

-   [`auguwu/git-tag-action`], [`auguwu/node-pm-action`], [`Noelware/docker-manifest-action`], [`Noelware/setup-protoc`]: Still uses Node for writing, testing, and bundling
-   [`auguwu/clippy-action`], [`Noelware/s3-action`]: Uses Bun for writing and testing, still uses [`@vercel/ncc`]

## Migrating to `bun build` instead of [`@vercel/ncc`]

<!-- TODO: this -->

## FIN

Thanks for listening to what I have to talk about and I hope you might migrate to Bun for building robust actions that people will use.

~ **Noel Towa**

[Creating a JavaScript action]: https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github
[`Noelware/docker-manifest-action`]: https://github.com/Noelware/docker-manifest-action
[`Noelware/setup-protoc`]: https://github.com/Noelware/setup-protoc
[`auguwu/node-pm-action`]: https://github.com/auguwu/node-pm-action
[`auguwu/git-tag-action`]: https://github.com/auguwu/git-tag-action
[`auguwu/clippy-action`]: https://github.com/auguwu/clippy-action
[`Noelware/s3-action`]: https://github.com/Noelware/s3-action
[`@vercel/ncc`]: https://npm.im/@vercel/ncc
