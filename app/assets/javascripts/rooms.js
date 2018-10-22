$(document).ready(function(){
     $('input[type="checkbox"]').prop("checked", false);
    
    $("#submit").click(function(){
    // alert("The paragraph was clicked.");
        var amentities_arr = [];

        if ($("#gym").prop("checked") == true)
            amentities_arr.push("gym");
        if ($("#kitchen").prop("checked") == true)
            amentities_arr.push("kitchen");
        if ($("#wifi").prop("checked") == true)
            amentities_arr.push("wifi");
        if ($("#air_conditioner").prop("checked") == true)
            amentities_arr.push("air_conditioner");
        if ($("#hot_water").prop("checked") == true)
            amentities_arr.push("hot_water");
        if ($("#tv").prop("checked") == true)
            amentities_arr.push("tv");
            
        amentities_str = amentities_arr.join(",");
        $("#room_amentities").val(amentities_str);
        var a =  $("#room_amentities").val();
        alert(a);
    });
});