# 🐻‍❄️📦 `auguwu/clippy-action`

> _GitHub action to run Clippy, an up-to-date and modern version of [actions-rs/clippy](https://github.com/actions-rs/clippy)_

**clippy-action** is a modernized and up-to-date version of [actions-rs/clippy](https://github.com/actions-rs/clippy) that takes advantage of GitHub's new features related to actions, and keeps dependencies up to date as `actions-rs/clippy` has been unmaintained since 2020.

## Usage

```yaml
jobs:
    clippy:
        name: Clippy
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: dtolnay/rust-toolchain@stable
              with:
                  components: clippy
            - uses: auguwu/clippy-action@1.3.0
              with:
                  token: ${{secrets.GITHUB_TOKEN}}
```

This action does allow writing check runs for Clippy results. To enable it, you will need to add this to your workflow:

```yaml
permissions:
    checks: write
```

## License

**clippy-action** is released under the [Apache 2.0](https://github.com/auguwu/clippy-action/blob/master/LICENSE) License with love by [Noel](https://floofy.dev)!
