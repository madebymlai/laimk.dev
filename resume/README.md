# Resume

LaTeX source for `resume.pdf`, based on
[Jake Gutierrez's template](https://github.com/jakegut/resume) (MIT), the
de-facto standard for software engineering resumes.

## Why this template

Single-column layout, which is what Applicant Tracking Systems parse reliably.
Two-column and heavily styled templates (Awesome-CV, Deedy) look better but risk
being mangled or dropped by parsers.

`\pdfgentounicode=1` is set so the generated PDF has a proper Unicode character
map, meaning text extracts cleanly rather than coming out as mojibake. Verify
with:

```bash
pdftotext resume.pdf - | head -30
```

## Building

```bash
./build.sh
```

Requires `pdflatex` (TeX Live). On Fedora: `sudo dnf install texlive-scheme-medium`.

## Changes from the upstream template

- `a4paper` instead of `letterpaper` (Italy)
- `geometry` instead of `fullpage`, which is not in a default TeX Live install
- `babel` removed; it needs language data files and does nothing here
- Added a Summary section

## Editing

Content lives directly in `resume.tex`. The Education section is commented out
at the bottom of the file: uncomment and fill it in when needed.

Keep it to one page.
