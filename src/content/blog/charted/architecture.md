---
title: charted ~ Architecture
description: Part 1 of how I developed charted-server - The architecture around it!~
createdAt: 2023-03-05T07:14:47.040Z
---

Welcome to a n-part series on where I discuss the aspects of building [charted-server](https://github.com/charted-dev/charted), a [Helm](https://helm.sh) chart registry in [Kotlin](https://kotlinlang.org).

## Why did you create charted?

I built charted out of frustration when hosting Helm charts for the company I'm creating, [Noelware](https://noelware.org). I didn't feel like just putting every chart in a GitHub repository, linking it to a domain with GitHub Pages, and call it a day. I wanted to create an developer platform to host any Helm chart out there for a single user, small team, or enterprise!

## ...but why Kotlin? and not out lord and savio-

I know, I do kind of regret using Kotlin but I'm going to stick with it until the JVM gets really sluggish with my poor skills of building this. But, when I first started, I was heavily in love with [Go](https://golang.org) (which... I despise it now!), which I wrote a prototype of ([you can look back in the history](https://github.com/charted-dev/charted/commit/ed8d2c9ca8ee1ee30bbf8632574edc0b33fe53be)) and after I learned how to use Go more, the more I hated it. But, I always love writing Kotlin, so I decided to do that!

...900 commits later and it's not even finished (at the time of writing this), how so?

## oh how i hate myself...

I'm a person who likes to rewrite stuff when I can't understand I wrote, which I need to get out of that habit! It is a pain...

I'm at the second refractor (and starting a third), and why I am doing those?

### the structure was oh so bad!

The first refractor (port from Go -> Kotlin) had a really bad structure and I couldn't even understand it! It's just a mess...

The second refractor is also the same, but the code was heavenly messy which I am trying to see best Kotlin practices and make it in a structure where the Noelware team can understand and how I can chuck it into a contributing file.

## thanks for reading this

the next part will be, i don't know it's 00:22 right now and i am eeppy.... zzz~!

bai bai!!!!

![](https://cdn.discordapp.com/attachments/774955933419700244/1081835638288023562/IMG_0530.jpg)
