module.exports = {
    bashCommand: `git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force`,
    pasteTitle: "how to gain dominance among developers"
}