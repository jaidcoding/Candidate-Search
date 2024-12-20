# Candidate Search Application

This application allows users to search for GitHub users and save potential candidates for future reference. It uses the GitHub API to fetch user details.

## Table of Contents

- [Environment Variables](#environment-variables)
- [Interfaces](#interfaces)
- [Functions](#functions)
- [Components](#components)
- [Pages](#pages)
- [Setup](#setup)
- [Usage](#usage)
- [Error Handling](#error-handling)

## Environment Variables

Make sure to set the following environment variable in your project:

- `VITE_GITHUB_TOKEN`: Your GitHub personal access token.

## Interfaces

### `GithubUser`

Represents a GitHub user.

```typescript
interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name?: string;
  location?: string;
  email?: string;
  company?: string;
}
```

### `Candidate`

Represents a candidate with additional details.

```typescript
interface Candidate {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  email: string;
  html_url: string;
  company: string;
}
```

## Functions

### `fetchGithub`

Fetches data from the GitHub API.

```typescript
const fetchGithub = async (url: string) => {
  // ...existing code...
};
```

### `searchGithub`

Fetches a list of GitHub users and their details.

```typescript
const searchGithub = async (): Promise<Candidate[]> => {
  // ...existing code...
};
```

### `searchGithubUser`

Fetches details of a specific GitHub user by username.

```typescript
const searchGithubUser = async (username: string): Promise<Candidate | null> => {
  // ...existing code...
};
```

## Components

### `CandidateCard`

Displays candidate details and provides options to save or view the next candidate.

```typescript
const CandidateCard: FunctionComponent<CandidateCardProps> = ({ candidate, onSave, onNext }) => {
  // ...existing code...
};
```

### `Nav`

Navigation component for the application.

```typescript
const Nav = () => {
  // ...existing code...
};
```

## Pages

### `Home`

Home page of the application.

```typescript
const Home = () => {
  // ...existing code...
};
```

### `CandidateSearch`

Page to search for candidates.

```typescript
const CandidateSearch: React.FC = () => {
  // ...existing code...
};
```

### `SavedCandidates`

Page to view saved candidates.

```typescript
const SavedCandidates: React.FC = () => {
  // ...existing code...
};
```

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file in the root directory and add your GitHub token:
   ```
   VITE_GITHUB_TOKEN=your_github_token
   ```
4. Start the development server using `npm run dev`.

## Usage

### Fetching a List of Candidates

```typescript
import { searchGithub } from './src/api/API';

const fetchCandidates = async () => {
  const candidates = await searchGithub();
  console.log(candidates);
};

fetchCandidates();
```

### Fetching a Specific User

```typescript
import { searchGithubUser } from './src/api/API';

const fetchUser = async (username: string) => {
  const user = await searchGithubUser(username);
  console.log(user);
};

fetchUser('octocat');
```

## Error Handling

The functions handle errors such as network issues and API rate limits. Ensure to check the console for error messages.

```typescript
try {
  const candidates = await searchGithub();
  // ...use candidates...
} catch (error) {
  console.error('Error:', error);
}
```

```typescript
try {
  const user = await searchGithubUser('octocat');
  // ...use user...
} catch (error) {
  console.error('Error:', error);
}
```
