// interface GithubUser {
//   login: string;
//   avatar_url: string;
//   html_url: string;
//   location?: string;
//   email?: string;
//   company?: string;
// }
interface Candidate {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  email: string;
  html_url: string;
  company: string;
}
const fetchGithub = async (url: string) => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(`Invalid API response: ${response.statusText} - ${errorResponse.message}`);
  }

  return await response.json();
};

const searchGithub = async (): Promise<Candidate[]> => {
  try {
    const start = Math.floor(Math.random() * 100) + 1; 
    const data = await fetchGithub(`https://api.github.com/users?since=${start}`);
    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
    console.error('Error fetching candidates:', err.message);
    }
    return [];
  }
};

const searchGithubUser = async (username: string): Promise<Candidate | null> => {
  try {
    const data = await fetchGithub(`https://api.github.com/users/${username}`);
    return data;
  } catch (err) {
    if (err instanceof Error) {
    console.error('Error fetching user:', err.message);
    }
    return null; 
  }
};

export { searchGithub, searchGithubUser };