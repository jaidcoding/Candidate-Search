# Candidate Search

A hiring tool that pulls candidates from the GitHub API, lets you accept or reject each one, and keeps a shortlist you can come back to.

![React](https://img.shields.io/badge/React-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6)
![Vite](https://img.shields.io/badge/Vite-646CFF)

**Live:** https://jaidcoding.github.io/Candidate-Search/

## How it works

Candidates are fetched one at a time from the GitHub users API. You accept — which saves them to the shortlist — or skip, which moves straight to the next. The shortlist persists in local storage, so it survives a refresh.

## Pages

| Page | Purpose |
| --- | --- |
| Candidate Search | One candidate at a time with accept and reject actions |
| Saved Candidates | The shortlist, in a sortable table, with the option to remove |

## Setup

The GitHub API rate-limits unauthenticated requests hard, so a personal access token is required.

1. Create a token at **GitHub → Settings → Developer settings → Personal access tokens**. No scopes are needed for public user data.
2. Add it to `.env` in the project root:

```
VITE_GITHUB_TOKEN=your_token_here
```

`.env` is gitignored — never commit the token.

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Structure

```
src/
  api/API.ts                    GitHub API calls
  components/CandidateCard.tsx  single candidate view
  components/CandidateSearch.tsx search flow
  interfaces/                   Candidate type definitions
  pages/                        SavedCandidates and search pages
```

## Error handling

Missing profile fields are rendered as a fallback rather than blank, exhausted API rate limits surface a message instead of failing silently, and an empty shortlist shows an empty state.

## Stack

React · TypeScript · Vite · GitHub REST API

## License

MIT — see [LICENSE](LICENSE).
