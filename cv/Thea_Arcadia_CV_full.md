# Thea Arcadia

**Junior Software Developer** · New Port Richey, FL · Open to remote

theruvial237@gmail.com · [linkedin.com/in/theaarcadia](https://www.linkedin.com/in/theaarcadia/) · [github.com/theruvial](https://github.com/theruvial) · [theruvial.com](https://theruvial.com)

## Summary

Self-taught developer with 7 years of personal projects (2019–present), strongest in Python, also C#/.NET and Unity. Built and ran Astrabot, a Discord bot with a PostgreSQL/SQLite ledger economy, and contributed hundreds of hand-written commits to two team Unity games. Run Arch Linux as my main OS and keep my own homelab on Proxmox, ZFS and nginx. Since 2026 I also design projects and direct AI coding tools to build them, including a text classifier I trained myself. Seeking an entry-level Python, automation or junior developer role, remote or in the Tampa Bay area.

## Technical Skills

- **Languages:** Python (strongest), C#, SQL (CTEs, window functions), PowerShell, bash
- **Frameworks and libraries:** discord.py (async, event-driven), Discord.NET, .NET 6, Unity, Python standard-library HTTP servers
- **Databases:** PostgreSQL, SQLite
- **Web and APIs:** JSON APIs, webhooks with HMAC signature checks, nginx reverse proxy, Let's Encrypt/certbot
- **Infrastructure:** Proxmox VE, TrueNAS, ZFS, Ubuntu Server, Raspberry Pi, Pi-hole + Unbound DNS
- **Linux:** Arch Linux, pacman and the AUR, systemd, Btrfs, X11/xrandr, i3, zsh
- **Tools:** Git on the command line (branching, merges, Unity scene conflicts), GitHub, AI coding assistants

## Experience

**Delivery Station Associate** — Amazon · *Oct 2025 – Present*

- Filed 42 safety reports through Amazon's Dragonfly system in 12 months; all 42 were resolved.
- Flagged an OSHA electrical violation (29 CFR 1910.303(b)(2)), 10 power strips daisy-chained into one outlet at the device cage; it was fixed the next day.
- Escalated an electric delivery van that had been running for weeks with a disconnected airbag connector; fleet maintenance reconnected it the same day.
- Got anti-fatigue mats installed at the lights station within 5 days, and pushed for new mobile racking to stay locked out until associates were trained.
- Work across pick and stage, lights, EV swapping and water spider roles.

**Overnight Shift Manager** — McDonald's · *2024 – Oct 2025*

- Promoted from Crew Member to the main overnight manager of a 24-hour store within a year.
- Ran a crew of 2–4 each night and trained new crew members on an ongoing basis.
- Handled the safe and all cash counts with no discrepancies.
- Led the nightly store clean so the morning crew got a seamless hand-off.

**Automotive Service Technician** — Nissan of Clearwater · *2021 – 2022* · Infiniti of Clearwater · *2014 – 2021*

- Supervised two technicians and dispatched work to them.
- Diagnosed 12-volt electrical faults by reading wiring diagrams, and tracked down mechanical faults through systematic testing.
- Ran multipoint inspections in Autopoint and wrote accurate repair orders in CDK.

## Projects

### Hand-written work (2019–2025)

**Astrabot and theaBot** — my Discord bot and its C# rewrite · Python, discord.py, PostgreSQL, SQLite · C#, .NET 6, Discord.NET · *2019 – present* · [github.com/theruvial/Astrabot](https://github.com/theruvial/Astrabot)

- Built Astrabot as an async, event-driven bot with reaction roles, a points economy, gambling, a shop and task tracking.
- Designed an append-only ledger for the bot's currency, so every balance change is recorded.
- Wrote non-trivial SQL by hand, including a CTE with window functions for role logic.
- Rewrote it in C# as [theaBot](https://github.com/theruvial/theaBot) (2022): .NET 6, Discord.NET, dependency injection, JSON configuration and slash commands.
- Still running and extended in 2026; see the AI-assisted work below.

**Co-op multiplayer Unity game** — Aboard the Astra · 4-person team · C# · *2020 – 2021, development resumed 2026*

- Wrote 247 commits: boss behaviours and cutscenes, status effects, a combat overhaul and new enemy types.
- Fixed client/server bugs, such as cutscenes and animations not syncing to clients.
- Cut rendering cost by drawing the starfield as a canvas image instead of projecting it onto a 3D object.
- Development resumed in October 2026 as a Unity 6 remake with Netcode for GameObjects, which I'm working on with the original team.

**Turn-based Unity game** — Rouge · 5-person team (work in progress) · C# · *2023 – 2025*

- Wrote 380+ commits and merged 44 pull requests: hero abilities, status effects, items, traits and UI.
- Moved the save system from binary files to JSON.

**FTL-style combat prototype** — Unity · C# · *2019*

- Built a weapon system driven by ScriptableObjects, so new weapons are data rather than code.

**Subscription Parser** — command-line tool · Python · *2023* · [github.com/theruvial/subscriptionParser](https://github.com/theruvial/subscriptionParser)

- Converts a Google Takeout CSV into batches of YouTube channel links, with a step-by-step user guide.

### Designed by me, built with AI coding tools (2026)

**AstraThought** — task classifier for Discord · Python, SetFit, PyTorch, AI-assisted · [github.com/theruvial/AstraThought](https://github.com/theruvial/AstraThought)

- Trained the model myself: 98% precision and 92% recall on 60 real Discord messages with human rulings, and 94% precision and 98% recall on a harder 100-row stress set.
- Hand-labelled 1,911 training rows plus 1,000 synthetic ones; retrains after every 50 new human labels.
- Runs as a local, loopback-only service. Unsure calls go to a human through Discord approve/disagree buttons, and each ruling becomes new training data.

**Aboard the Astra Remake: mechanics wiki** — Python, HTML/CSS/JS, AI-assisted · private repo, delivered by [Astrabot](https://github.com/theruvial/Astrabot)

- 19-page wiki generated from the game's C# source and design docs, sent as a single HTML file by Astrabot's `/wiki` command, with a bundled copy as a fallback when the backend is down.
- Generator and backend live in the game's private repo. The backend only listens on the local machine, rejects any request without its shared secret (and refuses everything if no secret is set), checks GitHub webhook signatures with HMAC, and serves a tasks API.

**Audiobook requests and signup** — Python, SQLite, SMTP, nginx, AI-assisted

- Discord cog and web UI for audiobook requests, with email notifications and an admin-only dashboard.
- Signup service that creates scoped users on my Audiobookshelf server, behind nginx.

### Homelab and Linux (self-run)

- Proxmox VE host running TrueNAS and Ubuntu Server VMs on ZFS; did the 8 → 9 major upgrade myself, including repo repair.
- nginx reverse proxy with Let's Encrypt for several subdomains; Pi-hole + Unbound on a Raspberry Pi for home DNS.
- Have run a vanilla Arch Linux install as my main OS for 4+ years on Btrfs with snapshots, and repeatedly recovered it from broken NVIDIA driver and kernel updates ([dotfiles](https://github.com/theruvial/dotfiles)).

## Education

**GED** — Florida Department of Education, New Port Richey · *2023*\
**Self-taught programming** — Python via *Automate the Boring Stuff with Python* · *2019 – present*
