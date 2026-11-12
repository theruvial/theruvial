# Hi, I'm Thea 👋

**Self-taught developer since 2019. Python first, C# and Unity second. I build complete systems and keep them running: the bot, the database, the web UI and the server under it.**

📍 New Port Richey, FL · 🔎 Looking for an entry-level Python, automation or junior developer role (remote or Tampa Bay) · 💼 [LinkedIn](https://www.linkedin.com/in/theaarcadia/) · 📄 [Resume (PDF)](https://github.com/theruvial/theruvial/blob/main/Thea_Arcadia_Resume.pdf)

![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![C#](https://img.shields.io/badge/C%23-512BD4?style=flat&logo=dotnet&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-336791?style=flat&logo=postgresql&logoColor=white)
![Unity](https://img.shields.io/badge/Unity-000000?style=flat&logo=unity&logoColor=white)
![Linux](https://img.shields.io/badge/Arch_Linux-1793D1?style=flat&logo=archlinux&logoColor=white)
![Proxmox](https://img.shields.io/badge/Proxmox-E57000?style=flat&logo=proxmox&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)

## By the numbers

- **7 years** running my own Discord bot, from 2019 to today
- **98% precision, 92% recall** from a text classifier I trained myself, on 60 real messages it never saw
- **1,911** training messages I labeled by hand
- **380+ commits and 44 merged pull requests** on a 5-person Unity team project
- **4+ years** on vanilla Arch Linux as my main OS

## Featured projects

| Project | What it is | Built with |
|---|---|---|
| **[Astrabot](https://github.com/theruvial/Astrabot)** | My Discord bot since 2019. It runs my team's to-do list, my audiobook server's request queue and our game's wiki, and it hot-reloads its own updates from GitHub. The original economy is an append-only ledger with hand-written SQL. | Python, discord.py, SQLite, PostgreSQL |
| **[AstraThought](https://github.com/theruvial/AstraThought)** | A small local model that decides whether a Discord message is a task. Unsure calls go to a human, and every ruling becomes new training data. | Python, SetFit, PyTorch |
| **[theaBot](https://github.com/theruvial/theaBot)** | Astrabot's points/XP economy rebuilt in .NET, with dependency injection and slash commands. | C#, .NET 6, Discord.NET, PostgreSQL |
| **[Subscription Parser](https://github.com/theruvial/subscriptionParser)** | A command-line tool that moves YouTube subscriptions between Google accounts, 50 at a time, for free. | Python |

**Private team projects:**
- **Aboard the Astra** (2020–2021, development resumed 2026): a co-op multiplayer Unity game. 247 commits: boss AI, cutscenes, status effects and client/server sync fixes. Now being remade in Unity 6 with the original team.
- **Rouge** (2023–2025, work in progress): a turn-based Unity game. Hero abilities, status effects, items, traits and a JSON save system.

## How I work

- **Hand-written, 2019–2025:** Astrabot's original bot, theaBot, both Unity games and Subscription Parser are my own code, written before AI coding tools.
- **AI-assisted, 2026:** I designed AstraThought, Astrabot's newer features and my web services, then orchestrated AI coding tools to build them. I can walk through every design decision.

## Homelab

I run my own servers at home:
- **Virtualization:** Proxmox VE with TrueNAS and Ubuntu Server VMs on ZFS. I did the 8 → 9 major upgrade myself.
- **Web:** an nginx reverse proxy with Let's Encrypt for my self-hosted services.
- **DNS:** Pi-hole + Unbound on a Raspberry Pi for the whole network.
- **Desktop:** Arch Linux on Btrfs with snapshots, kept running through 4+ years of rolling updates and NVIDIA driver breakage.
