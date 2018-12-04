$(document).on('turbolinks:load', function(){
    $('input[type="checkbox"]').prop("checked", false);
    
    function checkAmentities(){
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
        
        return amentities_arr;
    }
    
    $('#room_amentities').on('ready', function(){
        var arr = $('#room_amentities').split(',');
        $("#room_amentities").val(amentities_str);
    })
    
    $("#submit").click(function(){
    // alert("The paragraph was clicked.");
        
        var amentities_str = checkAmentities().join(",");
        $("#room_amentities").val(amentities_str);
        var a =  $("#room_amentities").val();
        // alert(a);
    });
    
    $(function() {
    // Multiple images preview in browser
    var imagesPreview = function(input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;
            // alert(filessAmount);
                
            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function(event) {
                    $($.parseHTML('<img style="object-fit:cover" height="150px" width="150px">'))
                        .attr('src', event.target.result)
                        .appendTo(placeToInsertImagePreview);
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
     
    // star ratings
    
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

    $('#comments').on('click', '#reply_button', function(e) {
    
        // $(this).on('click', '#reply_button', function(e){
            e.preventDefault();
            console.log('edit');
            var edit_form = $(this).parentsUntil('#comments')
                   .find('#edit_form');
                   
            $(this).parentsUntil('#comments')
                   .find('#reply_form')
                   .toggle('200');

        // });
    });
    
    // $('#reply_form').submit(function(e) {
    //     e.preventDefault();
    //     $(this).fadeOut('200');
    // })
    if ($('#room_info').height() > 150){
        $('#show_link').show();
        $('#room_info').addClass('room-info-hide').css('overflow','hidden');
    }
    
    $('#show_link').click(function(e){
        e.preventDefault();
        rInfo = $(this).parent().find('#room_info');
        rInfo.toggleClass('room-info-hide');
        if (!rInfo.hasClass('room-info-hide')){
            $(this).html('Show less <i class="fas fa-chevron-up"></i>');
        } else {
            $(this).html('Read more about the space <i class="fas fa-chevron-down"></i>');
        }
    });
    
    $("#comment_form").submit(function(){
        if ($("comment_rating_attributes_stars").val() == ''){
            $("p#value").text("Rating not available.");
        }
        
        $("comment_rating_attributes_stars").val('');
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