#!/bin/bash
MY_GIT_HOOKS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

## Automatically generate a file with git branch and revision info
##
## Example:
##   [master]v2.0.0-beta-191(a830382)
## Install:
##   cp git-create-revisioninfo-hook.sh .git/hooks/post-commit
##   cp git-create-revisioninfo-hook.sh .git/hooks/post-checkout
##   cp git-create-revisioninfo-hook.sh .git/hooks/post-merge
##   chmod +x .git/hooks/post-*
##
## Credit:
##   https://gist.github.com/ThomDietrich/7127ca6e45dd4747e86ad9a609e1aeeb

FILENAME="$MY_GIT_HOOKS_DIR/../../../version"

exec 1>&2
branch=`git rev-parse --abbrev-ref HEAD`
branch=`sed -E 's/[^[:alnum:][:space:]]+/_/g' <<<"$branch"`
shorthash=`git log --pretty=format:'%h' -n 1`
revcount=`git log --oneline | wc -l`
revcount=`sed -E 's/ //g' <<<"$revcount"`
latesttag=`git describe --tags --abbrev=0 --always`

VERSION="$latesttag-$branch-$revcount($shorthash)"
echo "$VERSION"
echo "$FILENAME"
echo $VERSION > $FILENAME

