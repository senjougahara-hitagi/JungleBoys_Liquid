$(document).on('turbolinks:load', function(){
    $('input[type="checkbox"]').prop("checked", false);
    
    $("#submit").click(function(){
    // alert("The paragraph was clicked.");
        var amentities_arr = [];

        if ($("#kitchen").prop("checked") == true)
            amentities_arr.push("Kitchen");
        if ($("#wifi").prop("checked") == true)
            amentities_arr.push("Wifi");
        if ($("#tv").prop("checked") == true)
            amentities_arr.push("TV");
        if ($("#gym").prop("checked") == true)
            amentities_arr.push("Gym");
        if ($("#air_conditioner").prop("checked") == true)
            amentities_arr.push("Air conditioner");
        if ($("#hot_water").prop("checked") == true)
            amentities_arr.push("Hot water");
        
            
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
                    // alert(input.files.name);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };
    
    $('#room_pictures').on('change', function(e) {
        e.preventDefault();
        $('#pictures_preview').html("");
        imagesPreview(this, '#pictures_preview');
        });
    });
    
    
    var current_value = 0;
  
    $('#comment_form').on('click', 'i', function(e){
        var rating_children = $('#your_rating').children();
        e.preventDefault();
        id = $(this).attr('id');

        for (i = 0; i < 5; i ++){
            if (!$(rating_children[i]).hasClass('rated')){
                $(rating_children[i]).toggleClass('rated');
            }
        
            if (i >= id){
                $(rating_children[i]).removeClass('rated');
                
            }
        }
        
        current_value = id;
        $('#comment_rating_attributes_stars').val(current_value);
    });
    
    $('#comment_form').on('mouseover', 'i', function(e){
        e.preventDefault();
        var rating_children = $('#your_rating').children();

        id = $(this).attr('id');
        
        for (i = 0; i < 5; i ++){
            if (!$(rating_children[i]).hasClass('rated')){
                $(rating_children[i]).toggleClass('rated');
            }
        
            if (i >= id){
                $(rating_children[i]).removeClass('rated');
                
            }
        }
        
        // console.log(id);
    });
    
    $('#comment_form').on('mouseleave', 'h2#your_rating', function(e){
        var rating_children = $('#your_rating').children();

        // console.log(current_value);
        for (i = 0; i < 5; i ++){
            if (!$(rating_children[i]).hasClass('rated')){
                $(rating_children[i]).toggleClass('rated');
            }
        
            if (i >= current_value){
                $(rating_children[i]).removeClass('rated');
                
            }
        }
    });

    // $('#comments').on('click', $('#comments').children().find('#edit_button'), function(e) {
    //     var comment = $('#comments').children();
    //     comment.find('#edit_form').show();
    // });
    
    $('#comments').children().each(function(e){
        $(this).find('#edit_button').click(function(e){
            $(this).parent().parent().find('#edit_form').show();
        })
    })
   
    // $('#comments').on('click', $('#comments').children().find('#edit_cancel_button'), function(e) {
    //     var comment = $('#comments').children();
    //     comment.find('#edit_form').hide();
    // });
   
    $("#comment_form").submit(function(){
        if ($("comment_rating_attributes_stars").val() == ''){
            $("p#value").text("error");
        }
    });
    
    
    $('body').on('click', '#edit_form i', function(e){
        var rating_children = $('#edit_form #your_rating').children();
        e.preventDefault();
        id = $(this).attr('id');
            console.log(id);
                for (i = 0; i < 5; i ++){
            if (!$(rating_children[i]).hasClass('rated')){
                $(rating_children[i]).toggleClass('rated');
            }
        
            if (i >= id){
                $(rating_children[i]).removeClass('rated');
                
            }
        }
        
        current_value = id;
        $('#edit_form #comment_rating_attributes_stars').val(current_value);
    });

    $('body').on('mouseover', '#edit_form i', function(e){
        e.preventDefault();
        var rating_children = $('#your_rating').children();

        id = $(this).attr('id');
        
        for (i = 0; i < 5; i ++){
            if (!$(rating_children[i]).hasClass('rated')){
                $(rating_children[i]).toggleClass('rated');
            }
        
            if (i >= id){
                $(rating_children[i]).removeClass('rated');
                
            }
        }
        
        // console.log(id);
    });
    
    $('body').on('mouseleave', '#edit_form h2#your_rating', function(e){
        var rating_children = $('#your_rating').children();

        // console.log(current_value);
        for (i = 0; i < 5; i ++){
            if (!$(rating_children[i]).hasClass('rated')){
                $(rating_children[i]).toggleClass('rated');
            }
        
            if (i >= current_value){
                $(rating_children[i]).removeClass('rated');
                
            }
        }
    });
    
});