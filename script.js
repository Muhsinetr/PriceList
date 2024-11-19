let wrapper = document.querySelector(".wrapper");

let offerArray = [];
let temArray = [];

wrapper.addEventListener("click", function(e) {

    if (e.target.classList[0] === "on-item") {
        hideAll();
        e.target.parentElement.nextElementSibling.classList.add("grpSh");
        e.target.parentElement.parentElement.classList.add("clickBg");
        e.target.style.cssText = "background-image: url(up-button.png);";
        e.target.classList.add("off-item");
        e.target.classList.remove("on-item");
    } else if (e.target.classList[0] === "off-item") {
        e.target.parentElement.nextElementSibling.classList.remove("grpSh");
        e.target.parentElement.parentElement.classList.remove("clickBg");
        e.target.style.cssText = "background-image: url(down-button.png);";
        e.target.classList.add("on-item");
        e.target.classList.remove("off-item");
    } else if (e.target.classList[0] === "on-group") {
        hideAllGrp();
        e.target.parentElement.nextElementSibling.classList.add("itemSh");
        e.target.parentElement.classList.add("item-change");
        e.target.style.cssText = "background-image: url(up-button.png);";
        e.target.classList.add("off-group");
        e.target.classList.remove("on-group");
    } else if (e.target.classList[0] === "off-group") {
        e.target.parentElement.nextElementSibling.classList.remove("itemSh");
        e.target.parentElement.classList.remove("item-change");
        e.target.style.cssText = "background-image: url(down-button.png);";
        e.target.classList.add("on-group");
        e.target.classList.remove("off-group");
    };
    if (e.target.classList[0] === "comp" || e.target.classList[0] === "gpr") {

        if (e.target.nextElementSibling.classList[0] === "on-item") {
            hideAll();
            e.target.parentElement.nextElementSibling.classList.add("grpSh");
            e.target.parentElement.parentElement.classList.add("clickBg");
            e.target.nextElementSibling.style.cssText = "background-image: url(up-button.png);";
            e.target.nextElementSibling.classList.add("off-item");
            e.target.nextElementSibling.classList.remove("on-item");
        } else if (e.target.nextElementSibling.classList[0] === "off-item") {
            e.target.parentElement.nextElementSibling.classList.remove("grpSh");
            e.target.parentElement.parentElement.classList.remove("clickBg");
            e.target.nextElementSibling.style.cssText = "background-image: url(down-button.png);";
            e.target.nextElementSibling.classList.add("on-item");
            e.target.nextElementSibling.classList.remove("off-item");
        } else if (e.target.nextElementSibling.classList[0] === "on-group") {
            hideAllGrp();
            e.target.parentElement.nextElementSibling.classList.add("itemSh");
            e.target.parentElement.classList.add("item-change");
            e.target.nextElementSibling.style.cssText = "background-image: url(up-button.png);";
            e.target.nextElementSibling.classList.add("off-group");
            e.target.nextElementSibling.classList.remove("on-group");
        } else if (e.target.nextElementSibling.classList[0] === "off-group") {
            e.target.parentElement.nextElementSibling.classList.remove("itemSh");
            e.target.parentElement.classList.remove("item-change");
            e.target.nextElementSibling.style.cssText = "background-image: url(down-button.png);";
            e.target.nextElementSibling.classList.add("on-group");
            e.target.nextElementSibling.classList.remove("off-group");
        }
    }

});

function sortoutArray() {
    let pushcode = ``;
    let sorted = companySort();
    sorted.forEach((comp) => {
        let grpary = [];
        let newAry = [];

        pushcode += `<div class="items">
            <div class="header">
                <p class="comp">${comp.charAt(0).toUpperCase() + comp.slice(1)}</p>
                <div class="on-item"></div>
            </div>
                      <div class="groups">
                      <div class = "grpHd">`;


        offerArray.forEach((val) => {
            if (val.company == comp) {
                grpary.push(val.itemGroup);
                newAry.push(val);
            }
        });
        grpary = [...new Set(grpary)];
        grpary.forEach((grp) => {
            let itnm = [];
            let new2ary = [];
            pushcode += ` 
            <div class="item-names">
                <div class="itmnm-head">
                    <p class="gpr">${grp.charAt(0).toUpperCase() + grp.slice(1)}</p>
                    <div class="on-group"></div>
                </div>
                         <div class="item-divs">
                         <div class = "itemHd">`;

            newAry.forEach((val) => {
                if (val.itemGroup == grp) {
                    itnm.push(val.groupName);
                    new2ary.push(val);
                }
            });
            itnm = [...new Set(itnm)];
            itnm.forEach((itm) => {
                pushcode += `<fieldset>
                        <legend>${itm.charAt(0).toUpperCase() + itm.slice(1)}</legend>`;
                new2ary.forEach((val) => {
                    if (val.groupName == itm) {
                        pushcode += ` <div>
                            <p>${val.itemName.charAt(0).toUpperCase() + val.itemName.slice(1) }</p>
                            <p>Price : ${val.Price} /-</p>
                        </div>`;
                    }
                });
                pushcode += `</fieldset>`;
            });
            pushcode += `</div>
            </div>
        </div>`;
        });

        pushcode += `</div>
                </div>
                </div> `;
    });
    wrapper.innerHTML = pushcode;
}

function companySort() {
    let sortedItemArray = [];
    offerArray.forEach((val) => {
        sortedItemArray.push(val.company);
    });
    let sortedDArray = [...new Set(sortedItemArray)];
    let sortsorted = sortedDArray.sort();
    return sortsorted;
}

function updateLocalStorage() {
    let localSave = JSON.stringify(temArray);
    localStorage.setItem("offerArray", localSave);
};

function setlocSTR() {
    if (localStorage.getItem("offerArray")) {
        let localArray = localStorage.getItem("offerArray");
        let newlocArry = JSON.parse(localArray);
        if (temArray == newlocArry) {
            offerArray = newlocArry;
        } else {
            offerArray = temArray;
            updateLocalStorage();
        }
    } else {
        offerArray = temArray;
        updateLocalStorage();
    }

}

function callLocalstroage() {
    if (localStorage.getItem("offerPascode") && localStorage.getItem("offerPascode") == "vrs.0.11") {
        setlocSTR();
        sortoutArray();
    } else {
        let msg = prompt('Please tha password', "");
        if (msg == "IQB-PKD") {
            localStorage.setItem("offerPascode", "vrs.0.11");
            sortoutArray();
        } else {
            document.write("No Data found");
        }
    }
};

function hideAll() {
    const offAll = document.querySelectorAll('.off-item');
    const offAllg = document.querySelectorAll('.off-group');
    offAll.forEach(function(offAll) {
        offAll.parentElement.nextElementSibling.classList.remove("grpSh");
        offAll.parentElement.parentElement.classList.remove("clickBg");
        offAll.style.cssText = "background-image: url(down-button.png);";
        offAll.classList.add("on-item");
        offAll.classList.remove("off-item");
    });
    offAllg.forEach(function(offAllg) {
        offAllg.parentElement.nextElementSibling.classList.remove("itemSh");
        offAllg.parentElement.classList.remove("item-change");
        offAllg.style.cssText = "background-image: url(down-button.png);";
        offAllg.classList.add("on-group");
        offAllg.classList.remove("off-group");
    });

}

function hideAllGrp() {
    const offAllg = document.querySelectorAll('.off-group');
    offAllg.forEach(function(offAllg) {
        offAllg.parentElement.nextElementSibling.classList.remove("itemSh");
        offAllg.parentElement.classList.remove("item-change");
        offAllg.style.cssText = "background-image: url(down-button.png);";
        offAllg.classList.add("on-group");
        offAllg.classList.remove("off-group");
    });
};

const abcd = new XMLHttpRequest();
abcd.onload = function() {
    const muhu = this.responseText
    const objs = muhu.split("$");
    let newArray = [];
    objs.forEach((obj) => {
        let after = JSON.parse(obj.trim());
        newArray.push(after);
    });
    temArray = newArray;
    callLocalstroage();
};

abcd.open('GET', 'hello.txt', true)
abcd.send();

const version = new XMLHttpRequest();
version.onload = function() {
    const muhu = this.responseText
    document.querySelector('.version').innerHTML = muhu;
};

version.open('GET', 'version.txt', true)
version.send();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("srworker.js").then(registration => {
        console.log("Service worker registered")
        console.log(registration);
    }).catch(error => {
        console.log("Service worker error")
        console.log(error)
    })
} else {
    alert("Service worker not working")
}
