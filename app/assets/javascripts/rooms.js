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
            
        var amentities_str = amentities_arr.join(",");
        $("#room_amentities").val(amentities_str);
        var a =  $("#room_amentities").val();
        // alert(a);
    });
    
    $(function() {
    // Multiple images preview in browser
    var imagesPreview = function(input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;
            // alert(filesAmount);
                
            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function(event) {
                    $($.parseHTML('<img height="30%" width="30%">')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                    alert(input.files.name);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };
    
    $('#room_pictures').on('change', function() {
        $('#pictures_preview').html("");
        imagesPreview(this, '#pictures_preview');
    });
});
});