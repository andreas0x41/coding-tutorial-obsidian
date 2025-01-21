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