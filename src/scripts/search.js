// @ts-check

var search_url = "https://duckduckgo.com/"

/**
    * @param {string} query 
    */
function search_action(query){
    if(is_link(query))
        window.location.href = "https://" + encodeURIComponent(query);
    else
        window.location.href = search_url + encodeURIComponent(query);
}

/**
    * @param {string} query 
    * @returns {boolean}
    */
function is_link(query){
    if(query.indexOf("www.") > -1 || query.indexOf(".com") > -1){
        return true;
    }
    return false;
}

