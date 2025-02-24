function createCard(title, channel, views, month, duration, thumbnail){
    let viewstr = views;
    if(views>=1000 && views<1000000){
        viewstr = Math.floor(views/1000) + " K";
    }
    else if(views>=1000000){
        viewstr = Math.floor(views/1000000) + " M";
    }
    let monthstr = month;
    if(month<12){
        monthstr = Math.floor(month) + " months";
    }
    else if(month>=12 && month<24){
        monthstr = Math.floor(month/12)+ " year";
    }
    else if(month>=24){
        monthstr = Math.floor(month/12) + " years";
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="" srcset="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${channel} . ${viewstr} Views . ${monthstr} ago</p>
            </div>
        </div>`
    document.querySelector(".container").innerHTML = html;
}

createCard("Every Indian College | Ft. Indian Hostels & Students", "NOT YOUR TYPE", 
    29556128, 20, "9:40","https://i.ytimg.com/vi/mdvMXDUoWto/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCgYaXnzImXVvu9IKf9Vl5e7apehg")