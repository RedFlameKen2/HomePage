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

/**
    * @param {boolean} hide 
    */
function hide_labels_event(hide){
    const link_labels = document.getElementsByClassName("quick_link_label");
    const display = hide ? "none" : "unset";
    for(let i = 0; i < link_labels.length; i++){
        link_labels[i].setAttribute("style", "display: " + display + ";");
    }
}

function resize_event(){
    if(window.innerWidth <= 950){
        hide_labels_event(true);
    } else {
        hide_labels_event(false);
    }
}


window.addEventListener("resize", resize_event);
resize_event();
