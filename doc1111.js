function postCount(json){
    document.write(&quot;<span class='count_text post2'> TOTAL POST ARTICLES &quot;);
    var count = json.feed.openSearch$totalResults.$t;
    document.write(&quot;<span class='count_num'>&quot; + count + &quot;</span>&quot;);
    document.write(&quot;</span>&quot;)
    }
    function numberOfComments(json){
    document.write(&quot;<span class='count_text comment2'> TOTAL COMMENTS &quot;);
    var count = json.feed.openSearch$totalResults.$t;
    document.write(&quot;<span class='count_num'>&quot; + count + &quot;</span>&quot;);
    document.write(&quot;</span>&quot;)
    }
