# Developer - Mastering Markdown
Markdown is a simple, easy-to-use file syntax for styling all forms of writing. This is what the Open Source Protogen Collection uses, in combination with [Jekyll](https://jekyllrb.com/), to make documents, blog posts, updates, etc... on our site.

> **NOTE:** This will be a simple overview of Markdown, you can find more info at: [https://guides.github.com/features/mastering-markdown/](https://guides.github.com/features/mastering-markdown/)


## What is Markdown?
Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like `#` or `*`.

Markdown also supports Emojis :open_mouth: :thumbsup: To see all supported Emojis, goto: [https://www.webfx.com/tools/emoji-cheat-sheet/](https://www.webfx.com/tools/emoji-cheat-sheet/)

Markdown will commonly be found as `.md` or `.markdown` files. Our site **ONLY supports `.md` as a markdown file extension!**


## Syntax guide
Here’s an overview of Markdown syntax that you can use anywhere on our site.

#### Headers
```
# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag
```

> **NOTE:** The 3rd Header tag (`<h3>`/`###`) is reserved for **Custom Page Naming**. A page will give itself an HTML Page Title (What you see at the top of the screen, and what will show up on a Search Engine (eg, Google, Firefox, etc)), based on either the first Header Tag (only works with tags, H1, H2, and H3) or if that is unavailable, the filename. If you want to overwrite this, you put a 3rd Header Tag (`<h3>`/`###`) on the First Line of the page and write your title there.

#### Emphasis
```
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_
```

#### Lists
##### Unordered
```
* Item 1
* Item 2
  * Item 2a
  * Item 2b
  ```
##### Ordered
```
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
```

#### Images
```
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
```

#### Links
```
[GitHub](http://github.com)
[http://github.com](http://github.com)
```

> **NOTE:** Automatic link creation is not yet supported in Jekyll (The code that turns the Markdown into an HTML Page). If you just put a link down (eg, `http://github.com`) it will not become a link. You must incase it like you would normal text. (eg, `[http://github.com](http://github.com)`)

#### Blockquotes
```
As Kanye West said:

> We're living the future so
> the present is our past.
```

> Blockquotes look like this! WOWIE!! We also use them for Notes, Alerts, etc.

#### Inline code
```
I think you should use an
`<addr>` element here instead.
```

For more Info and Examples, goto: [https://guides.github.com/features/mastering-markdown/]


## It's not the End of the World if you made a Mistake
If you made, or found, a mistake in one of the pages - Dont worry! You can easily edit them after they have been made. It can take between 10 seconds, to a full hour before pages are published to the web (depending on server load).


## Everything you publish is accessible to the Whole World
Please be sure, that you are following our [Terms and Conditions](https://protogencollection.titusstudios.net/legal/terms-and-conditions), all Copyright, COPPA, etc.. Laws before publishing a page. Note that it is easy to edit a page, but it is hard for us to get a page completely off a Search Engine (such as Google). If you are unsure, please contact someone in our team to review.
