#!/usr/bin/env bash
# Build resume.pdf from resume.tex, then publish a copy to public/ so the
# site serves it at /resume.pdf. Run twice so cross-references settle.
set -euo pipefail
cd "$(dirname "$0")"
pdflatex -interaction=nonstopmode -halt-on-error resume.tex >/dev/null
pdflatex -interaction=nonstopmode -halt-on-error resume.tex >/dev/null
rm -f resume.aux resume.log resume.out
cp resume.pdf ../public/resume.pdf
echo "built:     $(pwd)/resume.pdf"
echo "published: $(cd .. && pwd)/public/resume.pdf"
