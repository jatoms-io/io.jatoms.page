---
layout: content
description: How nested folders are structured and what frontmatter they need
author: Sandared
published_at: 2019-05-05
---

Front matter to use for a nested page:

```
---
layout: nested
description: Something I want to be displayed on the folder navigation card within a nested structure
---
```

* **layout**: the layout *nested* is only used on **index.md** files within a nested folder.
* **description**: This information is only taken into account by the navigation cards of a nested layout.

Jekyll in its base form does not really support something like a hierarchical folder structure that is then represented in several pages each pointing to the next embedded folder or the files within it.

Therefore we decided to write a *nested* layout that allows us to structure content in the same way as we display it: nested.
This layout should only be used on index.md files of which only one should ever exist within one folder.

Have a look at the **_contribute** or **_jatoms** folder if you want to see it in action.