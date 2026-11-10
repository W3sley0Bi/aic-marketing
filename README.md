# aic-marketing

Marketing website for devalps.com (company home + `ai-connector/` product page).
Plain static HTML/CSS, no build. Served by GitHub Pages from `main`, custom domain in `CNAME`.

Logo, favicon and mascot files are generated from the app repo (`make brand` in project-mcp,
which writes into this folder when it sits next to it). Sign in / Get started link to
the local dashboard (http://localhost:5173, `make run`) for now; switch them to
https://aic.devalps.com for production (search-replace the base URL in the HTML). Keep claims in line with what the product does.
