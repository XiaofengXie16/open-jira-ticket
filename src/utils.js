import { execSync } from 'child_process';
import BASE_URL from './constants';

const executeGitCommand = command =>
  execSync(command)
    .toString('utf8')
    .replace(/[\n\r\s]+$/, '');

const getCurrentBranchName = () => executeGitCommand('git rev-parse --abbrev-ref HEAD');

const getTicketNumber = () => {
  const branch = getCurrentBranchName();
  const number = branch.match(/[a-zA-Z]+-[0-9]+/i);
  return number?.[0] || '';
};

export const setBasePath = (config, basePath) => {
  const baseUrl = basePath.endsWith('/') ? basePath : `${basePath}/`;
  config.set(BASE_URL, baseUrl);
};

export const getFullUrl = baseUrl => `${baseUrl}${getTicketNumber()}`;
