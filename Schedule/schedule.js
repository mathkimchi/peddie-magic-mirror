//Sets the schedule image (id="image_1") src depending on the time
var day = new Date();
var today = parseInt(day.getDay());
var hour = parseInt(day.getHours());
var minutes = parseInt(day.getMinutes());
var imgElem = document.getElementById('image_1');

function is_blue_week() {
    // TODO
    return true;
}

/**
 * 
 * @param {BigInt} hour 
 * @param {BigInt} minutes 
 * 
 * @returns {Number} the relative-y pixel that corresponds to this time in the schedule.
 */
function time_to_height(hour, minutes) {
    // TODO
    return hour;
}

(function () {
    if (today == 1) {
        if (hour == 8 && minutes <= 50) { // Monday A Block
            imgElem.src = 'Schedule/MonA.PNG';
        }
        else if (hour == 9) { // Monday B Block
            imgElem.src = 'Schedule/MonB.PNG';
        }
        else if (hour == 10 && minutes >= 0 && minutes <= 15) { // Monday B Block
            imgElem.src = 'Schedule/MonB.PNG';
        }
        else if (hour == 10 && minutes >= 20) { // Monday Chapel and Conference Block
            imgElem.src = 'Schedule/MonChapel.PNG';
        }
        else if (hour == 11 && minutes >= 0 && minutes <= 15) { // Monday Chapel and Conference Block
            imgElem.src = 'Schedule/MonChapel.PNG';
        }
        else if (hour == 11 && minutes >= 20) { // Monday C Block
            imgElem.src = 'Schedule/MonC.PNG';
        }
        else if (hour == 12 && minutes <= 10) { // Monday C Block
            imgElem.src = 'Schedule/MonC.PNG';
        }
        else if (hour == 12 && minutes > 10 && minutes < 55) { // Monday Lunch
            imgElem.src = 'Schedule/MonLunch.PNG';
        }
        else if (hour == 12 && minutes >= 55) { // Monday D Block
            imgElem.src = 'Schedule/MonD.PNG';
        }
        else if (hour == 13) { // Monday D Block
            imgElem.src = 'Schedule/MonD.PNG';
        }
        else if (hour == 14 && minutes >= 0 && minutes < 10) { // D Block
            imgElem.src = 'Schedule/MonD.PNG';
        }
        else if (hour == 14 && minutes >= 10) { // Monday E Block
            imgElem.src = 'Schedule/MonE.PNG';
        }
        else if (hour == 15 && minutes >= 0 && minutes < 10) { // E Block
            imgElem.src = 'Schedule/MonE.PNG';
        }
        else {
            imgElem.src = 'Schedule/dailyschedule.png';
        }
    }
    if (today == 2) {
        if (hour == 8 && minutes <= 50) { // Tuesday F Block
            imgElem.src = 'Schedule/TuesF.PNG';
        }
        else if (hour == 9) { // Tuesday G Block
            imgElem.src = 'Schedule/TuesG.PNG';
        }
        else if (hour == 10 && minutes >= 0 && minutes <= 15) { // Tuesday G Block
            imgElem.src = 'Schedule/TuesG.PNG';
        }
        else if (hour == 10 && minutes >= 20) { // Tuesday DMX Block
            imgElem.src = 'Schedule/TuesDMX.PNG';
        }
        else if (hour == 11 && minutes >= 0 && minutes <= 15) { // Tuesday DMX Block
            imgElem.src = 'Schedule/TuesDMX.PNG';
        }
        else if (hour == 11 && minutes >= 15) { // Tuesday A Block
            imgElem.src = 'Schedule/TuesA.PNG';
        }
        else if (hour == 12 && minutes <= 10) { // Tuesday A BLock
            imgElem.src = 'Schedule/TuesA.PNG';
        }
        else if (hour == 12 && minutes > 10) { // Tuesday Lunch 
            imgElem.src = 'Schedule/TuesLunch.PNG';
        }
        else if (hour == 13 && minutes >= 0 && minutes < 20) { // Tuesday Lunch 
            imgElem.src = 'Schedule/TuesLunch.PNG';
        }
        else if (hour == 13 && minutes >= 20) { // Tuesday C Block
            imgElem.src = 'Schedule/TuesC.PNG';
        }
        else if (hour == 14 && minutes >= 0 && minutes < 10) { // Tuesday C Block
            imgElem.src = 'Schedule/TuesC.PNG';
        }
        else if (hour == 14 && minutes >= 10) { // Tuesday B Block
            imgElem.src = 'Schedule/TuesB.PNG';
        }
        else if (hour == 15 && minutes >= 0 && minutes < 10) { // Tuesday B Block
            imgElem.src = 'Schedule/TuesB.PNG';
        }
        else {
            imgElem.src = 'Schedule/dailyschedule.png';
        }
    }
    if (today == 3) {
        if (hour == 8 && minutes <= 50) { // Wednesday D Block
            imgElem.src = 'Schedule/WedD.PNG';
        }
        else if (hour == 9) { // Wednesday E Block
            imgElem.src = 'Schedule/WedE.PNG';
        }
        else if (hour == 10 && minutes >= 20) { // Wednesday Community Meeting
            imgElem.src = 'Schedule/WedComm.PNG';
        }
        else if (hour == 11 && minutes >= 0 && minutes <= 15) { // Wednesday Community Meeting
            imgElem.src = 'Schedule/WedComm.PNG';
        }
        else if (hour == 11 && minutes >= 20) { // Wednesday G Block
            imgElem.src = 'Schedule/WedG.PNG';
        }
        else if (hour == 12 && minutes <= 10) { // Wednesday G Block
            imgElem.src = 'Schedule/WedG.PNG';
        }
        else if (hour == 12 && minutes > 10 && minutes < 55) { // Wednesday Lunch
            imgElem.src = 'Schedule/WedLunch.PNG';
        }
        else if (hour == 12 && minutes >= 55) { // Wednesday F Block
            imgElem.src = 'Schedule/WedF.PNG';
        }
        else if (hour == 13 && minutes >= 0 && minutes <= 45) { // Wednesday F Block
            imgElem.src = 'Schedule/WedF.PNG';
        }
        else {
            imgElem.src = 'Schedule/dailyschedule.png';
        }
    }
    if (today == 4) {
        if (hour == 8 && minutes <= 50) { // Thursday B Block
            imgElem.src = 'Schedule/ThursB.PNG';
        }
        else if (hour == 9) { // Thursday C Block
            imgElem.src = 'Schedule/ThursC.PNG';
        }
        else if (hour == 10 && minutes >= 0 && minutes <= 15) { // Thursday C Block
            imgElem.src = 'Schedule/ThursC.PNG';
        }
        else if (hour == 10 && minutes >= 20) { // Thursday DMX Block
            imgElem.src = 'Schedule/ThursDMX.PNG';
        }
        else if (hour == 11 && minutes >= 0 && minutes <= 15) { // Thursday DMX Block
            imgElem.src = 'Schedule/ThursDMX.PNG';
        }
        else if (hour == 11 && minutes >= 15) { // Thursday D Block
            imgElem.src = 'Schedule/ThursD.PNG';
        }
        else if (hour == 12 && minutes <= 10) { // Thursday D BLock
            imgElem.src = 'Schedule/ThursD.PNG';
        }
        else if (hour == 12 && minutes > 10) { // Thursday Lunch 
            imgElem.src = 'Schedule/ThursLunch.PNG';
        }
        else if (hour == 13 && minutes >= 0 && minutes < 20) { // Thursday Lunch 
            imgElem.src = 'Schedule/ThursLunch.PNG';
        }
        else if (hour == 13 && minutes >= 20) { // Thursday E Block
            imgElem.src = 'Schedule/ThursE.PNG';
        }
        else if (hour == 14 && minutes >= 0 && minutes < 10) { // Thursday E Block
            imgElem.src = 'Schedule/ThursE.PNG';
        }
        else if (hour == 14 && minutes >= 10) { // Thursday A Block
            imgElem.src = 'Schedule/ThursA.PNG';
        }
        else if (hour == 15 && minutes >= 0 && minutes < 10) { // Thursday A Block
            imgElem.src = 'Schedule/ThursA.PNG';
        }
        else {
            imgElem.src = 'Schedule/dailyschedule.png';
        }
    }
    if (today == 5) {
        if (hour == 8 && minutes <= 50) { // Friday G Block
            imgElem.src = 'Schedule/FriG.PNG';
        }
        else if (hour == 9) { // Friday F Block
            imgElem.src = 'Schedule/FriF.PNG';
        }
        else if (hour == 10 && minutes >= 0 && minutes <= 15) { // Friday F Block
            imgElem.src = 'Schedule/FriF.PNG';
        }
        else if (hour == 10 && minutes >= 20) { // Friday Chapel and Conference Block
            imgElem.src = 'Schedule/FriChapel.PNG';
        }
        else if (hour == 11 && minutes >= 0 && minutes <= 15) { // Friday Chapel and Conference Block
            imgElem.src = 'Schedule/FriChapel.PNG';
        }
        else if (hour == 11 && minutes >= 20) { // Friday B Block
            imgElem.src = 'Schedule/FriB.PNG';
        }
        else if (hour == 12 && minutes <= 10) { // Friday C Block
            imgElem.src = 'Schedule/FriB.PNG';
        }
        else if (hour == 12 && minutes > 10 && minutes < 55) { // Friday Lunch
            imgElem.src = 'Schedule/FriLunch.PNG';
        }
        else if (hour == 12 && minutes >= 55) { // Friday A Block
            imgElem.src = 'Schedule/FriA.PNG';
        }
        else if (hour == 13) { // Friday A Block
            imgElem.src = 'Schedule/FriA.PNG';
        }
        else if (hour == 14 && minutes >= 0 && minutes < 10) { // Friday A Block
            imgElem.src = 'Schedule/FriA.PNG';
        }
        else if (hour == 14 && minutes >= 10) { // Friday C Block
            imgElem.src = 'Schedule/FriC.PNG';
        }
        else if (hour == 15 && minutes >= 0 && minutes < 10) { // Friday C Block
            imgElem.src = 'Schedule/FriC.PNG';
        }
        else {
            imgElem.src = 'Schedule/dailyschedule.png';
        }
    }
    if (today == 6) {
        if (hour == 8 && minutes <= 50) { // Saturday E Block
            imgElem.src = 'Schedule/SatE.PNG';
        }
        else if (hour == 9 && minutes <= 50) { // Saturday D Block
            imgElem.src = 'Schedule/SatD.PNG';
        }
        else if (hour == 10 && minutes <= 50) { // Saturday F Block
            imgElem.src = 'Schedule/SatF.PNG';
        }
        else if (hour == 11 && minutes <= 50) { // Saturday G Block
            imgElem.src = 'Schedule/SatG.PNG';
        }
        else {
            imgElem.src = 'Schedule/dailyschedule.png';
        }
    }
    if (today == 0) {
        imgElem.src = 'Schedule/dailyschedule.png';
    }
    if (hour == 8 && minutes == 0 && seconds == 0) {
        window.location.reload();
    }
    else if (hour == 9 && minutes == 0 && seconds == 0) {
        window.location.reload();
    }
    else if (hour == 10 && minutes == 20 && seconds == 0) {
        window.location.reload();
    }
    else if (hour == 11 && minutes == 20 && seconds == 0) {
        window.location.reload();
    }
    else if (hour == 12 && minutes == 10 && seconds == 0) {
        window.location.reload();
    }
    else if (hour == 14 && minutes == 20 && seconds == 0) {
        window.location.reload();
    }
    else if (hour == 15 && minutes > 10 && seconds == 0) {
        window.location.reload();
    }
    else if (hour == 16 && minutes == 0 && seconds == 0) {
        window.location.reload();
    }
    else if (hour == 17 && minutes == 0 && seconds == 0) {
        window.location.reload();
    }
    else if (hour == 18 && minutes == 0 && seconds == 0) {
        window.location.reload();
    }
    else if (hour == 19 && minutes == 0 && seconds == 0) {
        window.location.reload();
    }
    else if (hour == 20 && minutes == 0 && seconds == 0) {
        window.location.reload();
    }
    else if (hour == 21 && minutes == 0 && seconds == 0) {
        window.location.reload();
    }
    else if (hour == 22 && minutes == 0 && seconds == 0) {
        window.location.reload();
    }
    else if (hour == 23 && minutes == 0 && seconds == 0) {
        window.location.reload();
    }
    else if (hour == 24 && minutes == 0 && seconds == 0) {
        window.location.reload();
    }
    if (today == 1 || today == 3 || today == 5) {
        if (hour == 12 && minutes == 55 && seconds == 0) {
            window.location.reload();
        }
    }
    else if (today == 2 || today == 4) {
        if (hour == 13 && minutes == 20 && seconds == 0) {
            window.location.reload();
        }
    }
    else if (today == 6) {
        if (hour == 11 && minutes == 51 && seconds == 0) {
            window.location.reload();
        }
    }
    else if (today == 3) {
        if (hour == 13 && minutes == 46 && seconds == 0) {
            window.location.reload();
        }
        else if (hour == 1 && minutes == 0 && seconds == 0) {
            window.location.reload();
        }
        else if (hour == 2 && minutes == 0 && seconds == 0) {
            window.location.reload();
        }
        else if (hour == 3 && minutes == 0 && seconds == 0) {
            window.location.reload();
        }
        else if (hour == 4 && minutes == 0 && seconds == 0) {
            window.location.reload();
        }
        else if (hour == 5 && minutes == 0 && seconds == 0) {
            window.location.reload();
        }
        else if (hour == 6 && minutes == 0 && seconds == 0) {
            window.location.reload();
        }
        else if (hour == 7 && minutes == 0 && seconds == 0) {
            window.location.reload();
        }
    }

})();