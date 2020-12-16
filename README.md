# Open Jira Ticket

This tool will read the jira ticket number from your branch name and open the jira ticket in your web browser.

## Get Started

1 Configure the base url for your jira

```
open-jira-ticket config --basePath=your_own_url
# e.g. https://www.jira.com/

```

2 Run the command below in your terminal to open the JIRA ticket in your browser.(Make sure you are in a git directory)
(This tool will open the ticket in your browser based on the current ticket number in the branch name)

```
open-jira-ticket
```
Bonus: Create an alias by adding the line below to the `.zshrc` or `.bashrc` file.

```
alias jira = "open-jira-ticket"
```