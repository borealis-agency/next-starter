# Utility

Folder used for utility functions that should be shared across the application. For example, good candidates to be put in this folder are date formatting functions, number formatting, text manipulation etc.

## Folder structure

Utility functions go into the top level `/utility` folder without creating additional nested folders. Group utility functions under the same "domain" they belong to. Don't do 1 function per file.

```
└── utility/
    ├── date.ts
    ├── math.ts
    ├── text.ts
    └── ...
```
