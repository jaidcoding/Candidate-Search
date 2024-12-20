import { Candidate } from '../interfaces/Candidate.interface';

export const searchGithub = async (): Promise<Candidate[]> => {
  const response = await fetch('https://api.github.com/users');
  const data = await response.json();
  return data.map((user: any) => ({
    id: user.id,
    login: user.login,
    name: user.name,
    avatar_url: user.avatar_url,
    location: user.location,
    email: user.email,
    html_url: user.html_url,
    company: user.company,
  }));
};
