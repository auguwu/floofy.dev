# 🏏 `auguwu/git-tag-action`

> _GitHub action to split your Git release tag into SemVer 2.0 parts_

This is a simple action to split your **git tag**, usually for releases, into a SemVer object which you can use for some reason!

## Usage

```yml
on:
    release:
        types:
            - published
jobs:
    release:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: auguwu/git-tag-action@master
              id: git-tag
            - run:
                  echo "${{ steps.outputs.git-tag.version }}"
                  # "1.0.0-alpha.3"
```

## Outputs

| Name         | Description                                                   |
| ------------ | ------------------------------------------------------------- |
| `version`    | Returns the version that was collected.                       |
| `major`      | Major version number                                          |
| `minor`      | Minor version number                                          |
| `patch`      | Patch version number                                          |
| `build?`     | Build version number, if any.                                 |
| `prerelease` | If the action was tagged with `pre-publish` in the event.     |
| `json`       | Returns a JSON string of the output, with this value omitted. |

## License

**git-tag-action** is released under the **MIT License** with love by Noel. :3
