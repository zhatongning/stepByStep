# stepByStep
 little strokes fell great oaks!

#### episode
when git clone the project, I got an error

```
    xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
```
REASON: I updated the Mac yesterday, and git is attached to XCode's Command line tools.
<strong>SOLUTION:</strong>
``` 
    xcode-select --install
```
