#!/usr/bin/env node

import React from "react";
import { render } from "ink";
import meow from "meow";

import App from "./App";

const cli = meow(`
    Usage
      $ open-jira-ticket

    Options
        --basePath : base url 

    Examples
    Step 1: set base url
      $ open-jira-ticket --baseUrl=https://atlassian.com/
      
    Step 2: navigate to a directory with git and checkout a branch with jira number in the branch name
      $ open-jira-ticket
`);

render(React.createElement(App, cli.flags));
