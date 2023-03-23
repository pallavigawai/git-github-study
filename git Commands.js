/**************************** A List of Git Commands ***************************** /
1. git init [directory]                 :Create a new Git repository from an existing directory

2. git clone [repo / URL]               :Clone a repository (local or remote via HTTP/SSH) used to create copy of a specific repository or branch within a repository.

3. git add [filename]                   :Git notifies you if you have any untracked files. If you want Git to start tracking a file, run the following command

4. git reset [commit] -- [file_path]    :Unstage Files on Git.

   Working with Git usually involves adding all the files to your index to prepare them for a commit. If you want to remove some files from the index before committing, you have to unstage the files in Git.
   One way to unstage files on Git is to run the git reset command.
   
5. git commit -m "Notes about the commit": Create a Commit
   After adding the specified files to the staging environment, instruct Git to package the files into a commit using the git commit command. Git then stores that file version. You can review the stored version at any given time. 
   git commit creates a commit, which is like a snapshot of your repository. These commits are snapshots of your entire repository at specific times. You should make new commits often, based around logical units of change. Over time, commits should tell a story of the history of your repository and how it came to be the way that it currently is.
   Commits include lots of metadata in addition to the contents and message, like the author, timestamp, and more.
   
6. git branch [new_branch_name]          : The first branch in a git repository is called master, and it is the primary branch in a project.
  git branch [new_branch_name]          : Create a New Branch
   Creating a new Git branch means creating a copy of the project from a specific point in time. Branches in Git allow users to make new features without applying the changes to the main branch while the feature is in development.
7.

8. git checkout [branch_name]             : Switch Branches
   Having several branches of a Git project provides a test environment for developers to track progress without affecting the production version of an application. Git allows you to switch between branches with the checkout command easily.
      
9. git add [file]: Snapshots the file in preparation for versioning, adding it to the staging area.

10. git status: Always a good idea, this command shows you what branch you're on, what files are in the working or staging directory, and any other important information.
      
11. git push: Uploads all local branch commits to the remote.

12. git log: Browse and inspect the evolution of project files.

13.git pull: Invoking git pull is equivalent to git fetch origin HEAD and git merge HEAD. HEAD is reference that points to the current branch.
   by "git pull" command.
   
14. Git branch usage
    Branching is an available feature in most version control systems. Git branches are a pointer to a snapshot of the changes you have made. 
    A new branch is created to encapsulate the changes when you want to fix bugs or add new features. This helps you to clean up the future's history before merging it. 
    Git branches are an essential part of everyday workflow. Git does not copy files from one directory to another, it stores the branch as a reference to a commit.   

15. 
Common options
git branch	Lists all of the branches in the repository (the same as git branch --list).
git branch <branch>     :Creates a new branch called <branch> but does not checks out the new branch.
git branch -d <branch>	:Deletes a branch. If there are unmerged changes, Git does not allow you to delete it.
git branch -D <branch>	:Forces delete the branch, even if there are unmerged changes. Execute this command when you are sure to delete it permanently.
git branch -m <branch>	:Moves or renames the current branch to <branch>.
git branch -a	         :Lists all the remote branches.
