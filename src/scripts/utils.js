// @ts-check

/**
    * @returns {string}
    */
function get_browser(){
    let agent = navigator.userAgent;
    if(agent.indexOf("Firefox") > -1)
        return "firefox";
    else if(agent.indexOf("Chrome") > -1)
        return "chrome"
    else if(agent.indexOf("Opera") > -1)
        return "opera"
    else if(agent.indexOf("Edge") > -1)
        return "edge"
    else if(agent.indexOf("Safari") > -1)
        return "safari"
    return "undefined"
}
