// @ts-check

/**
    * @param {string} element_id 
    */
function element_gain_focus(element_id){
    const element = document.getElementsByName(element_id)[0]
    if(element != null){
        element.focus;
    }
}

function init_actions(){
    /** @type any */
    const search_input = document.getElementById("search_input");

    if(search_input != null){
        search_input.addEventListener("keydown", function(e) {
            if(e.key == "Enter"){
                let query = search_input.value;
                if(query != null){
                    search_action(query)
                }
            }
        })
    }
}

init_actions();
