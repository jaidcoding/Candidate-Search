declare global {
  interface ImportMeta {
    env: {
      VITE_GITHUB_TOKEN: string;
    };
  }
}

interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name?: string;
  location?: string;
  email?: string;
  company?: string;
}

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
  try {
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
  } catch (error) {
    if (error instanceof Error) {
      console.error('Network error:', error.message);
    }
    throw error;
  }
};

const searchGithub = async (): Promise<Candidate[]> => {
  try {
    const start = Math.floor(Math.random() * 100) + 1; 
    const data: GithubUser[] = await fetchGithub(`https://api.github.com/users?since=${start}`);
    
    // Fetch additional details for each user
    const detailedCandidates = await Promise.all(data.map(async (user) => {
      const userDetails: GithubUser = await fetchGithub(`https://api.github.com/users/${user.login}`);
      console.log(userDetails); // Log userDetails to check properties
      return {
        login: userDetails.login,
        avatar_url: userDetails.avatar_url,
        name: userDetails.name || userDetails.login, // Ensure name is not undefined
        location: userDetails.location || 'N/A', // Provide default value if undefined
        email: userDetails.email || 'N/A', // Provide default value if undefined
        html_url: userDetails.html_url,
        company: userDetails.company || 'N/A', // Provide default value if undefined
      };
    }));

    return detailedCandidates;
  } catch (err: unknown) {
    if (err instanceof Error) {
      if (err.message.includes('rate limit exceeded')) {
        console.error('GitHub API rate limit exceeded. Please try again later.');
      } else {
        console.error('Error fetching candidates:', err.message);
      }
    }
    return [];
  }
};

const searchGithubUser = async (username: string): Promise<Candidate | null> => {
  try {
    const data: GithubUser = await fetchGithub(`https://api.github.com/users/${username}`);
    console.log(data); // Log data to check properties
    return {
      login: data.login,
      avatar_url: data.avatar_url,
      name: data.name || data.login, // Ensure name is not undefined
      location: data.location || 'N/A', // Provide default value if undefined
      email: data.email || 'N/A', // Provide default value if undefined
      html_url: data.html_url,
      company: data.company || 'N/A', // Provide default value if undefined
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error fetching user:', err.message);
    }
    return null; 
  }
};

export { searchGithub, searchGithubUser };