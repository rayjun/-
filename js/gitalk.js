$(function () {
    var gitalk = new Gitalk({
        clientID: '#{theme.gitalk.clientID}',
        clientSecret: '#{theme.gitalk.clientSecret}',
        id: decodeURI(window.location.pathname),
        repo: '#{theme.gitalk.repo}',
        owner: '#{theme.gitalk.owner}',
        admin: '#{theme.gitalk.admin}'
    })
    gitalk.render('gitalk-container')
}());