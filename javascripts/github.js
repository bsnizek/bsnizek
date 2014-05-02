jQuery.githubUser = function(username, callback) {

    // https://api.github.com/users/bsnizek/repos
    var url = "https://api.github.com/users/" + username + "/repos?callback=?";
    jQuery.getJSON(url, callback);
}

jQuery.fn.loadRepositories = function(username) {

    this.html("<span>Querying GitHub for repositories...</span>");

    var target = this;

    $.githubUser(username, function(data) {

        data = data['data'];

        var list = $("<div>");

        target.empty().append(list);

        for (var i in data) {
            var repo = data[i];
            if (repo.private==false) {
                list.append('<div><a href="'+ repo.html_url +'" target="_blank">' + repo.name + '</a></div>');
            }
        }
    });
}

/*
 sortByNumberOfWatchers(repos);

 var list = $('<dl/>');
 target.empty().append(list);
 $(repos).each(function() {
 list.append('<dt><a href="'+ this.url +'">' + this.name + '</a></dt>');
 list.append('<dd>' + this.description + '</dd>');
 });
 });

 function sortByNumberOfWatchers(repos) {
 repos.sort(function(a,b) {
 return b.watchers - a.watchers;
 });
 }
 };
 */