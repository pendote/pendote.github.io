const links = {
    "1": "https://umusic.box.com/s/rfep1p6ewojcn7fr88lnrsiqgbzt5df1",
    "2": "https://umusic.box.com/s/hhlijbji0a6lmi8pm59b2k5b1z2a689k",
    "3": "https://umusic.box.com/s/t6pf3it5enbgitd720rcfwsl5v8ubpuo",
    "4": "https://umusic.box.com/s/moqzqktgzgiqcp3xjjrqrv1civ1fuvgz",
    "5": "https://umusic.box.com/s/iaenx1cjhtams14l9mzfnws39sn6kxo4",
    "6": "https://umusic.box.com/s/479dcmmurqn0ztih6f3nzmk0vz5is1u0",
    "7": "https://umusic.box.com/s/v2cd7ja096445xysamq2jgmujr3uq0ae",
    "8": "https://umusic.box.com/s/t8fvrgc2o3g2bhhnk98a8rashe5my31b",
    "9": "https://umusic.box.com/s/wzkcs5ymo43ja01vdiuxgshd27q14uaf",
    "10": "https://umusic.box.com/s/icyo4fuj1yg1ydhe3zoqi0xqe7ju173a",
    "11": "https://umusic.box.com/s/nsc25j0dbgexd437ja61usp2wt3cx13t",
    "12": "https://umusic.box.com/s/6xlxzsgfnwiaip054s63kpjucj30n7ru",
    "13": "https://umusic.box.com/s/dxil5buf2am80zhyvsr5vo9hn9bjnoc4",
    "14": "https://umusic.box.com/s/tohzbhebh38u77tk7pjsssmcv374l1ai",
    "15": "https://umusic.box.com/s/53bp2143h60fmo8qfv7idx1pet1c8y24",
    "16": "https://umusic.box.com/s/4cg2o9nfuuukcducb84eh1z4v6vcllt1",
    "17": "https://umusic.box.com/s/0r2g7gen4zcayjx9xgi2lewstv8zmio4",
    "18": "https://umusic.box.com/s/0lnzmtod6nhlgopzx3ftk9byf30xi4xj",
    "19": "https://umusic.box.com/s/rg59t8ix3gn6od2pcn0w3dhtolw3yrrc",
    "20": "https://umusic.box.com/s/jlpv25cf5spxf5thyy5giqymm1kfm7k3",
    "21": "https://umusic.box.com/s/fesxg2uhgcybdc3jfxu2umnzqyk1fax8",
    "22": "https://umusic.box.com/s/hf21kgyqndak5xxy3a16lqn2c62do49w",
    "23": "https://umusic.box.com/s/ju3yxgvf7ktnlwbei5rkd1qszhhpquni",
    "24": "https://umusic.box.com/s/3txhphkmttof02vvwqgjb1v3p4lkqsv7",
}

const images = {
    "1": "",
    "2": "https://cdn.discordapp.com/attachments/638109536644890645/912814675681509417/jul_2_decembre.jpg",
    "3": "https://cdn.discordapp.com/attachments/913846390793310288/913846467318403132/jul_3_decembre.jpeg",
    "4": "https://cdn.discordapp.com/attachments/913846390793310288/913846477074366545/jul_4_decembre.jpeg",
    "5": "https://cdn.discordapp.com/attachments/913846390793310288/913846485966290994/jul_5_decembre.jpeg",
    "6": "https://cdn.discordapp.com/attachments/913846390793310288/913846500591808532/jul_6_decembre.jpeg",
    "7": "https://cdn.discordapp.com/attachments/913846390793310288/913846509370478663/jul_7_decembre.jpeg",
    "8": "https://cdn.discordapp.com/attachments/913846390793310288/913846517671010324/jul_8_decembre.jpeg",
    "9": "https://cdn.discordapp.com/attachments/913846390793310288/913846528987254864/jul_9_decembre.jpeg",
    "10": "https://cdn.discordapp.com/attachments/913846390793310288/913846537522671636/jul_10_decembre.jpeg",
    "11": "https://cdn.discordapp.com/attachments/913846390793310288/913846547664486470/jul_11_decembre.jpeg",
    "12": "https://cdn.discordapp.com/attachments/913846390793310288/913846555881115689/jul_12_decembre.jpeg",
    "13": "https://cdn.discordapp.com/attachments/913846390793310288/913846564429127730/jul_13_decembre.jpeg",
    "14": "https://cdn.discordapp.com/attachments/913846390793310288/913846573815984138/jul_14_decembre_MIDI.jpeg",
    "15": "https://cdn.discordapp.com/attachments/913846390793310288/913846583601283093/jul_15_decembre.jpeg",
    "16": "https://cdn.discordapp.com/attachments/913846390793310288/913846592203800656/jul_16_decembre.jpeg",
    "17": "https://cdn.discordapp.com/attachments/913846390793310288/913846600172970014/jul_17_decembre.jpeg",
    "18": "https://cdn.discordapp.com/attachments/913846390793310288/913846612219019264/jul_18_decembre.jpeg",
    "19": "https://cdn.discordapp.com/attachments/913846390793310288/913846624432840725/jul_19_decembre.jpeg",
    "20": "https://cdn.discordapp.com/attachments/913846390793310288/913846633706422282/jul_20_decembre.jpeg",
    "21": "https://cdn.discordapp.com/attachments/913846390793310288/913846641637855302/jul_21_decembre.jpeg",
    "22": "https://cdn.discordapp.com/attachments/913846390793310288/913846650584322088/jul_22_decembre.jpeg",
    "23": "https://cdn.discordapp.com/attachments/913846390793310288/913846661481107526/jul_23_decembre.jpeg",
    "24": "https://cdn.discordapp.com/attachments/913846390793310288/913846673938190426/jul_24_decembre.jpeg",
}

const init = () => {
    // Get current date
    // Source for this: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    dd = 1;
    console.log("Current day : " + dd)
    var mm = String(today.getMonth() + 1).padStart(2, '0')
    console.log("Current month : " + mm)
    var hh = today.getHours()
    console.log("Current hour : " + hh)
    
    // Build & add all buttons
    var conteneurDiv = document.getElementById('conteneur')
    for (let i = 1; i < 25; ++i) {
        var newButton = document.createElement("button")
        newButton.classList.add("clickable-sphere")
        newButton.classList.add(`day${i}`)
        if ((i) < dd) {
            // Past sphere
        }
        else if (i == dd) {
            // Today's sphere
            newButton.classList.add("today")
        }
        else {
            // We cannot click the sphere
            newButton.classList.add("unavailable")
        }
        var numberHeader = document.createElement("h1")
        numberHeader.append(i)
        newButton.appendChild(numberHeader)
        conteneurDiv.appendChild(newButton)
    }

    // Fetch overlay element
    var overlay = document.getElementById("overlay");

    // Add button behavior
    var buttonList = document.getElementsByClassName('clickable-sphere')
    var popupTextHeader = document.createElement("h2")
    
    for (let i = 0; i < buttonList.length; ++i) {
        buttonList[i].addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            var classes = e.currentTarget.className
            var dayStrIndex = classes.search("day") + 3
            var dayNumber
            if (dd >= 10) {
                dayNumber = classes.substr(dayStrIndex, 2)
            }
            else {
                dayNumber = classes.substr(dayStrIndex, 1)
            }
            // console.log(dayNumber)
            // console.log(links[dayNumber])
            // Add corresponding unavailable screen
            var popup = document.createElement("div")
            overlay.classList
            // Check if button is allowed
            console.log("i+1 = " + `${i+1}`)
            console.log("dd = " + dd)
            if ( ( ((i+1) <= dd) && ( (i+1 != 14) || (dd != 14) ) ) || ( (dd == 14) && (i+1 == 14) && (hh >= 12) ) ) {
                var link = links[dayNumber]
                if (link) {
                    window.open(links[dayNumber], '_blank').focus()
                }
                else {
                    
                }
            }
            else {
                var invalidDayNumber = classes.substr(dayStrIndex, 2).replace(" ", "")
                console.log("not allowed")
                var image = images[invalidDayNumber]
                if (image) {
                    window.open(image, '_blank').focus()
                }
                else {
                    overlay.classList.add("overlay-visible")
                }
            }
        })
    }

    // Add overlay behavior
    overlay.addEventListener('click', (e) => {
        if (overlay.classList.contains("overlay-visible")) {
            overlay.classList.remove("overlay-visible")
        }
    })
    

}

init()
