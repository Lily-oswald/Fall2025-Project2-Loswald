function displayCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeString = hours + ':' + minutes;
    
    $('#time').html(timeString).css('visibility', 'visible');
    
    $('#time').dialog({
        title: 'Current Time',
        modal: true,
        width: 350
    });
}
function displayCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const day = String(now.getDate()).padStart(2, '0');
    const dateString = month + '/' + day + '/' + year;
    
    $('#time').html(dateString).css('visibility', 'visible');
    
    $('#time').dialog({
        title: 'Current Date',
        modal: true,
        width: 350
    });
}

$(document).ready(function() {
    // Time button click
    $('#timeBtn').click(displayCurrentTime);
    // Date button click
    $('#dateBtn').click(displayCurrentDate);
    // Background images array
    const backgrounds = [
        'https://images.unsplash.com/photo-1516741539888-96b4c96adf0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1576707948881-b485713fbad7?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1672572483727-a198b6529189?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];
    let currentBgIndex = 0;
    
    // Change background on header click
    $('#headerClick').click(function() {
        currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
        $('body').css('background-image', 'url("' + backgrounds[currentBgIndex] + '")');
    });
});