## Problem Statement

- Scanned exam questions lack selectable or searchable text, making it difficult to browse and study questions efficiently.
- I wanted a digital interface to interact with the questions and filter them based on:
  - Topic
  - Exam type: Regular / Back
  - Question no.

## Data processing

- Cleaned the scanned questionnaires
- Removed unnecessary pages
- Converted the PDFs to Markdown with `ocr.z.ai`.
- Used `Claude Sonnet 4.6` to turn the Markdown into JSON
- Grouped questions by:
  - topic
  - exam year
  - regular/back session

## App progression

- Started with a basic HTML/CSS/JS version
- Used it to check the data structure and filtering flow
- Moved the app to React 19
- Kept the UI split into smaller components as the app grew
- Iterate it based on preference

## Notes storage

- Notes stay local in the browser
- Note images are converted to Base64
- Images are stored in IndexedDB through `idb-keyval`
- Image resolution happens note-wise

## Tools used

- `ocr.z.ai` for PDF to Markdown conversion
- `Claude Sonnet 4.6` for Markdown to JSON conversion and initial app work
- `nuqs` for URL-based filters
- `katex` for LaTeX support
- `@mdxeditor/editor` for notes
- `idb-keyval` for IndexedDB storage
- [Kami Design System](https://kami.tw93.fun/)

## TODO

- Add cleanup for images deleted from notes so IndexedDB does not keep unused data around.
- Passing strategy/ Marks optimization technique?
- Maybe make data persist on database? but I don't want to pay for image storage 

## Running locally

```bash
vp install
vp dev
```
