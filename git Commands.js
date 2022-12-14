/**************************** A List of Git Commands *****************************/
1. git init [directory]                 :Create a new Git repository from an existing directory
2. git clone [repo / URL]               :Clone a repository (local or remote via HTTP/SSH)
3. git add [filename]                   :Git notifies you if you have any untracked files. If you want Git to start tracking a file, run the following command
4. git reset [commit] -- [file_path]    :Unstage Files on Git
   Working with Git usually involves adding all the files to your index to prepare them for a commit. If you want to remove some files from the index before committing, you have to unstage the files in Git.
   One way to unstage files on Git is to run the git reset command.
5. git commit -m "Notes about the commit": Create a Commit
   After adding the specified files to the staging environment, instruct Git to package the files into a commit using the git commit command. Git then stores that file version. You can review the stored version at any given time.   
6. git branch [new_branch_name]          : The first branch in a git repository is called master, and it is the primary branch in a project.

7. git branch [new_branch_name]          : Create a New Branch
   Creating a new Git branch means creating a copy of the project from a specific point in time. Branches in Git allow users to make new features without applying the changes to the main branch while the feature is in development.
8. git checkout [branch_name]             : Switch Branches
   Having several branches of a Git project provides a test environment for developers to track progress without affecting the production version of an application. Git allows you to switch between branches with the checkout command easily.
