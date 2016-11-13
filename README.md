# code-along-demos

Each demo has it's own branch


## generate.sh

Iterates through git commits and builds bundles that can be sent to cojs

```bash
PREFIX="co-$1"

CURRENT=`git rev-parse HEAD`

git log --pretty=format:"$PREFIX-%h.txt - %s" > "$PREFIX-index.txt"

for HASH in `git log --pretty=format:'%h'`; do

  git checkout $HASH

  FILE="$PREFIX-$HASH.txt"

  echo "writing to $FILE"

  echo "writing main.js"
  cat main.js > $FILE

  for fn in `git ls-files`; do
    if [[ "$fn" != 'main.js' ]]
    then
      echo "writing $fn (+ header prefix)"
      echo "//____$fn" >> $FILE
      cat $fn >> $FILE
    fi

  done

done

git checkout $CURRENT
```
