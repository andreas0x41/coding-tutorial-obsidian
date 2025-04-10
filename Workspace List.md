---
title: Untitled
author: Andreas Patuzzi
company: Auroville Institute of Applied Technology
draft: false
aliases: 
tags: []
---

```dataview
table replace(file.folder, "content", ".") as "Folder Path", dateformat(file.mtime, "hh:mm_dd.MM.yy") as "Modified", join(file.tags, ", ") as "Tags"
from "content"
sort file.folder, file.name
```

```dataview
table file.link as "Note", text as "Checkbox"
from "content"
where contains(file.tasks.text, "[ ]") and contains(file.tasks.header, "Questions")
```

test

```dataviewjs
// Iterate through all pages in the vault
for (let page of dv.pages()) {
    // Ensure the page has content and the "Questions" heading
    if (page.content && page.content.includes("## Questions")) {
        // Extract the content after "## Questions"
        let content = page.content.split("## Questions")[1];
        // Match all lines with checkboxes
        let checkboxes = content.match(/- \[.*?\].*/g);
        // Display each checkbox as a list item
        if (checkboxes) {
            dv.header(3, page.file.name);
            dv.list(checkboxes.map(cb => cb.trim()));
        }
    }
}
```
tet
```dataview
TASK
FROM "content"
```

```tasks
filter by function task.file.folder.includes( query.file.folder )
sort by function task.file.folder
group by function task.file.folder
```
