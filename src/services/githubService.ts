const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_API_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

if (!GITHUB_API_TOKEN) {
  console.error('GitHub API token is not defined');
  throw new Error('GitHub API token is not defined');
}

export const fetchCandidates = async (query: string) => {
  console.log('Making API request to GitHub with query:', query);
  try {
    const response = await fetch(`${GITHUB_API_URL}/search/users?q=${query}`, {
      headers: {
        Authorization: `token ${GITHUB_API_TOKEN}`,
      },
    });
    if (!response.ok) {
      console.error('Failed to fetch candidates:', response.statusText);
      throw new Error(`Failed to fetch candidates: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('API response data:', data);
    return data.items;
  } catch (error) {
    console.error('Error during fetchCandidates:', error);
    throw error;
  }
};
