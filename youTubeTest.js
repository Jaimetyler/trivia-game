$(document).ready(function() {
    //jquery
    var video = $(location).attr('href').split('v=')[1];
	function numberformat(number, n, x) {
		var re = '(\\d)(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
		return number.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$1,');
	};
    $.ajax({
            cache: false,
            data: $.extend({
                key: 'API_KEY',
                id: video
            }, {}),
            dataType: 'json',
            type: 'GET',
            timeout: 5000,
            url: 'https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,status&fields=items(id,snippet,statistics,contentDetails,status)'
    })
    .done(function(data) {
        var items = data.items[0];
        console.log(items);
        // Add player
        $("#hyv-player-api").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+items.id+'?rel=1&showinfo=1" frameborder="0" allowfullscreen=""></iframe>');
        // Add title
        $("#hyv-eow-title").text(items.snippet.title);
        // Add thumb img
        $(".hyv-thumb-clip").html('<img width="48" height="48" src="'+items.snippet.thumbnails.default.url+'" />');
        // Add View Count
        $("#hyv-watch-views-info .hyv-watch-view-count").text(numberformat(parseInt(items.statistics.viewCount)));
        // Add title
        $(".hyv-user-info").text(items.snippet.channelTitle);
        // Add publish data
        $(".hyv-watch-time-text").text("Published on "+items.snippet.publishedAt);
        // Add publish data
        $("#hyv-eow-description").text(items.snippet.description);
        new PrettyJSON.view.Node({ 
            el:$(".hyv-watch-sidebar-body"), 
            data:items
        });
    });
});