## Overview

This document covers the following assignments:

- **ReactProps**
- **ReactPropsRefine**
- **ReactPropsMounted**
- **ReactPropsShow**

But you have not turned in the last two. I'll send this to you anyway, as it may be helpful.

I'm looking mostly at your Week04 branch, but I did not fix your broken tests from there. Instead, I went to Midterm branch, and fixed the one broken test I found there. That involved updating your Header Test as follows:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from '../components/ElfHeader';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
// TODO: I added this code
import ElfDebug from '../ElfDebug';
var elfDebug = new ElfDebug(true, 'ElfHeader');

describe('Header Test', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><ElfHeader /></Router>, div);
    });

    it('renders and reads H2 text', () => {
        const wrapper = mount(<Router><ElfHeader /></Router>);

        const welcome = <h2>Welcome to React</h2>;
        // TODO: I fixed this code. Then you test passed.
        elfDebug.getAll(wrapper, 'h2');

        expect(wrapper.contains(welcome)).toEqual(true);
    });

});
```

In the code for Week04, you were missing ElfLogger.js. I added that. And you were forgetting to call event.preventdefault when you called fetch. Fixing those, and your code began to work.

Below are more general comments.

## Client Side

This looks good

Your CSS is well formed and your code is reasonably well structured.

Main Issues:

- Your work is in the **GitExplorer** folder.
- Your code runs, after my fixes, without errors or warnings.
- I can see User, Foo and Numbers views.
- You retrieve data from the server
- You query the GitHub API
- You have a \_\_mocks\_\_ folder with a working **fetch** mock in it
- You created a well formed **field-definitions.js** file.
- You autogenerate the **form** controls with **ElfElements**.
- In **SmallNumbers**, you provide a view of  numbers. You might have added a few more.

You have properly refactored your code into the following files or something similar:

- ElfElements.js
- GetFoo.js
- GetUserInfo.js
- ElfHeader.js
- ShowUserInfo.js
- SmallNumbers

As suggested, your React components are in files that begin with a capital letter and use Pascal casing.

The following directories exist:

- \_\_tests\_\_
- components
- css
- images

Smaller Issues

- **.bowerrc** changed to include **bower-components**
- **index.js** is properly implemented  with **ElfHeader**, **GetUserInfo**, **App**/**GetFoo**, **SmallNumbers** in it.
- You do a good job of formatting your code.

## Testing

You have something like 15 working tests in the Midterm and they are refactored into 4 or 5 **modules**, at least approximately one per component.

Overall this is good, but you could have had a few more tests.

You are using the Enzyme debug statements.

## Commit Graded

Here is what I was looking at:


```
commit 2a32239cdf4222c7762ababad3e5d5c4ca902df3
Author: meh at school <later>
Date:   Thu May 4 15:47:48 2017 -0700

    changed body to gitUser
```

If you feel this was the wrong commit, let me know.


## Comment Location

My comments are in your **Week04-Charlie** branch as are my fixes. More specifically, here are the comments:

https://github.com/silvershirubia/isit322-yu-2017/blob/Week04-Charlie/CharlieComments.md

And also attached, but easier to read through the above link to your repository.
