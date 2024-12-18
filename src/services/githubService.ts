const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_API_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

if (!GITHUB_API_TOKEN) {
  console.error('GitHub API token is not defined');
  throw new Error('GitHub API token is not defined');
}

export const fetchCandidates = async (query: string) => {
  const response = await fetch(`${GITHUB_API_URL}/search/users?q=${query}`, {
    headers: {
      Authorization: `token ${GITHUB_API_TOKEN}`,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch candidates');
  }
  const data = await response.json();
  return data.items;
};
