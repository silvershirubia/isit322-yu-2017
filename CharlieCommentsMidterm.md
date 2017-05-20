# Comments Midterm Isit322 2017

This document contains Charlie's comments on your Isit322 2017 Midterm.

This was a bit bumpy. You should write a few more tests, and should include another call to the GitHub API.

Though it was not part of your commit on the 16th, your most recent commit in the midterm branch had some broken code for our new **gitapi** folder in the routes part of the server. I fixed that code in **app.js** and on the client side in DataMaven.

```javascript
fetch('/gitapi/gists/gist-second')
```

I pushed it along with these notes. You probably want to look at that. Check for the TODO items.

## Basics

Your application has a styled menu and supports component switching. You included the following menu items:

- **Home**
- **GetFoo**
- **SmallNumbers**

## Additional Requests

- You made at least one more request of the GitHub API, but it was really just a repeat of the original call to create. I was hoping that you make a call to a different function.
- You Included the results of these requests in the menu
- Your app switches between your Git request views

## Tests and Polish

- You have 29 test in at 5 test suits.
- JSCS is available and many files in the project have trouble with the JSCS tests.
- Your code runs without warnings and errors.
- There is some dead code in some files such as **GetUserInfo**. Just delete it and depend on Git to get it back if needed, or else create a **deadcode.js** and put it there.

## Extra Credit

- Your **git-convert** program doesn't seem to be working very well. See this code for an example of what to write:

```javascript
function readFile(fileName, callback) {
    'use strict';
    if (!callback) {
        return new Promise(function(resolve, reject) {
            fs.readFile(fileName, 'utf8', function(err, fileContents) {
                if (err) {
                    reject(err);
                }
                resolve({
                    'result': fileContents
                });
            });
        });
    } else {
        fs.readFile(fileName, 'utf8', function(err, fileContents) {
            if (err) {
                throw (err);
            }
            callback({
                'result': fileContents
            });
        });
    }
}

readFile('git-user.json').then(function(text) {
    debug(text);
    const json = JSON.parse(text.result);
    debug('\n\nSTRINGIFY\n\n', JSON.stringify(json));
    const gitUser = [];
    const unknown = 'unknown';
    for (let property in json) {
        if (json.hasOwnProperty(property)) {
            //console.log(property);
            const gitUserEntry = {};
            gitUserEntry.id = property;
            gitUserEntry.label = property + '-name';
            gitUserEntry.type = 'text';
            gitUserEntry.sample = property + '-' + unknown;
            gitUser.push(gitUserEntry);
        }
    }
    console.log('\n\nSTRINGIFY\n\n', JSON.stringify(gitUser, null, 4));
    debug('all done');
});
```


## Commit

I was looking at:

```
commit e43e4a31d9aaedb1606538761413957e02ce8c64
Author: meh at school <later>
Date:   Thu May 18 16:35:26 2017 -0700

    server tests
```

But I also looked at the commit from the 16th.

## Comments

My comments are in a file called **CharlieCommentsMidterm** in the **charlie-midterm** branch of your repository:

https://github.com/silvershirubia/isit322-yu-2017/tree/charlie-midterm

https://github.com/silvershirubia/isit322-yu-2017/blob/charlie-midterm/CharlieCommentsMidterm.md

https://github.com/silvershirubia/isit322-yu-2017/commit/df37f73868b4f2961e4330908b2b13941721376c

And also attached, but easier to read through the above link to your repository.
