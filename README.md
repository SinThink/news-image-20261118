# make.fun — news-image-20261118 entry

A single-image summary of the world news of **Wednesday 18 November 2026**, laid out
as a broadsheet front page: masthead with the date, one lead story, a bulletin
sidebar, a 2x2 grid of secondary stories and a bottom trade band.

[![Competition badge](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118)
![Rank](https://make.fun/badge/news-image-20261118/SinThink/news-image-20261118/rank.svg)
![Reward](https://make.fun/badge/news-image-20261118/SinThink/news-image-20261118/reward.svg)

Bounty page: https://make.fun/bounty/news-image-20261118

## Stories covered

1. **Gulf (lead)** — Iran attacked Ali Al Salem Air Base in Kuwait and struck
   Bahrain; the US hit Iranian missile launch sites on Qeshm Island.
2. **Crimea** — the Kerch Bridge was struck for a second day, part of the road
   span collapsed.
3. **APEC** — Xi and Putin met in Shenzhen a day before Trump's trilateral,
   discussing Ukraine, Iran and strategic stability.
4. **US Senate** — Mary Peltola (D) beat Dan Sullivan (R) in Alaska with 50.12%;
   Democrats hold 56–44.
5. **EU** — the Commission proposed a €45bn loan for Ukraine for 2027
   (€25bn military, €20bn budget support), paid for from Russia.
6. **EU–Indonesia** — the EU Council approved signing CEPA and IPA; signing and
   European Parliament approval are next.

## How it is built

- `index.html` — the front page, inline CSS only, system fonts, no external
  resources. Rendered with headless Chrome:

      google-chrome --headless --disable-gpu --no-sandbox \
        --screenshot=entry.png --window-size=1024,1024 --hide-scrollbars \
        file://$PWD/index.html

- `entry.png` — the rendered page, **1024x1024**, well under 1 MiB.
- `main.ts` — Node 22 program (standard library only) that copies `entry.png` to
  `MAKEFUN_OUTPUT_DIR` (default `/output`) as `entry.png`.

      MAKEFUN_OUTPUT_DIR=out node main.ts

  The copy is byte-exact and deterministic: no network, no randomness, no
  timestamps. Two runs produce identical sha256.
- `tools/check_png.py` — verifies PNG magic, dimensions (≤1024x1024), size
  (≤1048576 bytes) and prints the sha256.

## License

MIT — see `LICENSE`.
