(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{366:function(e,t,a){"use strict";a.r(t);var r=a(42),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"feature-branch-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feature-branch-workflow"}},[e._v("#")]),e._v(" Feature Branch Workflow")]),e._v(" "),a("p",[e._v("The core idea behind the Feature Branch Workflow is that all feature development should take place in a dedicated branch instead of the "),a("code",[e._v("master")]),e._v(" branch.\nThis encapsulation makes it easy for multiple developers to work on a particular feature without disturbing the main codebase.\nIt also means the "),a("code",[e._v("master")]),e._v(" branch will never contain broken code, which is a huge advantage for continuous integration environments.")]),e._v(" "),a("p",[e._v("Encapsulating feature development also makes it possible to leverage pull requests, which are a way to initiate discussions around a branch.\nThey give other developers the opportunity to sign off on a feature before it gets integrated into the official project.\nOr, if you get stuck in the middle of a feature, you can open a pull request asking for suggestions from your colleagues.\nThe point is, pull requests make it incredibly easy for your team to comment on each others work.")]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"starting-a-new-feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-a-new-feature"}},[e._v("#")]),e._v(" Starting a new feature")]),e._v(" "),a("p",[e._v("It is prefered to create a new feature branch directly from a Jira ticket so that features can be tracked back to the original requirement.")]),e._v(" "),a("h3",{attrs:{id:"i-creating-a-new-feature-branch-from-a-jira-ticket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-creating-a-new-feature-branch-from-a-jira-ticket"}},[e._v("#")]),e._v(" i) Creating a new feature branch from a Jira ticket:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('from JIRA > "Create Branch":\n    Repository: CAHPS/admin3\n    Branch Type: [Bugfix|Feature]\n    Branch from: Master\n    Branch name: PE-123-my-feature-branch\n')])])]),a("h4",{attrs:{id:"then-from-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#then-from-the-cli"}},[e._v("#")]),e._v(" Then, from the CLI:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git fetch origin feature/PE-123-my-feature-branch:feature/PE-123-my-feature-branch\n$ git checkout feature/PE-123-my-feature-branch\n")])])]),a("br"),e._v(" "),a("h3",{attrs:{id:"ii-creating-a-new-feature-branch-from-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ii-creating-a-new-feature-branch-from-the-cli"}},[e._v("#")]),e._v(" ii) Creating a new feature branch from the CLI:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git checkout master\n$ git pull origin master\n\n$ git checkout -b feature/my-feature-branch\n\n$ git push origin feature/my-feature-branch\n")])])]),a("br"),e._v(" "),a("h2",{attrs:{id:"working-on-the-feature-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-on-the-feature-branch"}},[e._v("#")]),e._v(" Working on the feature branch")]),e._v(" "),a("p",[e._v("On this branch, edit, stage, and commit changes in the usual fashion, building up the feature with as many commits as necessary.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('$ git add <some-file>\n$ git add <some-file>\n$ git commit -m "Started work on feature"\n\n$ git add <some-file>\n$ git commit -m "Did some more work on feature"\n')])])]),a("br"),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("It's a good idea to periodically push the feature branch up to the central repository.\nThis serves as a convenient backup, when collaborating with other developers, this would give them access to view commits to the new branch.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git push origin feature/my-feature-branch\n")])])]),a("p",[a("strong",[e._v("Try to do this at least once a week.")])])]),e._v(" "),a("br"),e._v(" "),a("p",[e._v("Work on the feature and make commits like you would any time you use Git.")]),e._v(" "),a("br"),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If the development of the feature branch spans a significant period of time,\nyou should periodically merge the "),a("code",[e._v("master")]),e._v(" branch into the feature branch and resolve any merge conflicts.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git checkout feature/my-feature-branch\n$ git merge master\n")])])]),a("p",[e._v("Resolve any merge conflics.")])]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"completing-the-feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#completing-the-feature"}},[e._v("#")]),e._v(" Completing the feature")]),e._v(" "),a("p",[e._v("Run the test suite.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ php artisan test\n")])])]),a("br"),e._v(" "),a("p",[e._v("Merge the "),a("code",[e._v("master")]),e._v(" branch into the feature branch and resolve any merge conflicts.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git checkout feature/my-feature-branch\n$ git merge master\n")])])]),a("p",[e._v("Resolve any merge conflics.")]),e._v(" "),a("br"),e._v(" "),a("p",[e._v("Next, if any fontend assets were changed during the development of your feature, they need to be compiled.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('# Run all Mix tasks and minify output...\n$ npm run production\n\n$ git add .\n$ git commit -m "Compiled production assets"\n')])])]),a("br"),e._v(" "),a("p",[e._v("Once complete, make one final push to the central repository.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git push origin feature/my-feature-branch\n")])])]),a("br"),e._v(" "),a("p",[e._v("Lastly, if there are multiple commits in your feature branch, you should consider squashing your commits.\nThis will enforce a cohesive Git history of feature merges.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git rebase --interactive [SHA]\n")])])]),a("p",[e._v("Note: That [SHA] is the hash of the commit just before the first one you want to rewrite from.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("# Interactive rebasing session\npick 1230001 Started work on feature\nsquash 1230002 Did some more work on feature\n")])])]),a("br"),e._v(" "),a("h2",{attrs:{id:"making-a-pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#making-a-pull-request"}},[e._v("#")]),e._v(" Making a Pull Request")]),e._v(" "),a("p",[e._v("Push your completed feature branch to the central repository.\nNote: Use the "),a("code",[e._v("--force")]),e._v(" flag if you squashed any commits on your feature branch.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git push --force origin feature/my-feature-branch\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('from Stash > "Create pull request":\n    Source: feature/my-feature-branch\n    Destination: master\n    Reviewers: [A colleague]\n')])])]),a("br"),e._v(" "),a("h2",{attrs:{id:"final-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#final-steps"}},[e._v("#")]),e._v(" Final steps")]),e._v(" "),a("p",[e._v("If you have been assigned to review a PR, you must be satisfied with the changed code before approving and merging.\nAsk your self, has the spirit of the ticket been satisfied, is the code written cleanly, have any bugs been introduced?\nDepending on the size of the change, you can choose to simply visually inspect the code in Stash or for larger changes,\npull down the feature branch and test on your local system.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("# Pull down the feature branch\n$ git fetch origin feature/my-feature-branch:feature/PE-123-my-feature-branch\n$ git checkout feature/my-feature-branch\n")])])]),a("br"),e._v(" "),a("h4",{attrs:{id:"approve-and-merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#approve-and-merge"}},[e._v("#")]),e._v(" Approve and Merge")]),e._v(" "),a("p",[e._v("Once satisfied you can approve the PR.\nThen ensure that "),a("strong",[e._v('"Delete source branch after merging"')]),e._v(' is checked before hitting the "Merge" button.')]),e._v(" "),a("br"),e._v(" "),a("h4",{attrs:{id:"clean-up-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clean-up-locally"}},[e._v("#")]),e._v(" Clean up locally")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("$ git checkout master\n$ git pull origin master\n$ git branch -d feature/my-feature-branch\n")])])]),a("p",[e._v("Note that Git should not complain about the "),a("code",[e._v("git branch -d")]),e._v(", since new feature is now accessible from the master branch.")]),e._v(" "),a("br"),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://git-scm.com/doc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git Documentation"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git Feature Branch Workflow"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://confluence.atlassian.com/display/STASH031/Using+pull+requests+in+Stash",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using pull requests in Stash"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=s.exports}}]);