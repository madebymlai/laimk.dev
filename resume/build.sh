#!/usr/bin/env bash
# Build resume.pdf from resume.tex. Run twice so cross-references settle.
set -euo pipefail
cd "$(dirname "$0")"
pdflatex -interaction=nonstopmode -halt-on-error resume.tex >/dev/null
pdflatex -interaction=nonstopmode -halt-on-error resume.tex >/dev/null
rm -f resume.aux resume.log resume.out
echo "built: $(pwd)/resume.pdf"
