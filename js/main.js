$(document).ready(function() {

    var listTag1 = null;
    var listTag2 = "<div id='list-id' class='col-md-1 card blue darken-1 z-depth-2'><div class='card-content white-text'><span class='card-title'>";
    var listTag3 = "</span></div></div></li>";
    var divTag = null;

    $(window).load(function() {
        $('.btn-danger').hide();
    });

    function addItem(e) {
        if (e.which === 13 || e.type == "click") {
            var itemToAdd = $('#txt-input').val();
            listTag1 = listTag2 + itemToAdd + listTag3;
            divTag = $('<li />', { html: listTag1 }).appendTo('ul.shop-list');
            $('.btn-danger').show();
            $('#txt-input').val("");
        } else {
            // alert('Please enter an item!');
        }
    }

    // $('ul').on('click','button' , function(el){
    //     $(this).parent().remove()
    // });
    // });

    $('#add-btn').click(addItem);
    $('#txt-input').keydown(addItem);


    $('li a.clearitem').live('click', function () {
  $(this).parent().remove();
});
    // This is supposed to clear an item when it is clicked.
    // $(this).click(function() {
    //     $('#shop-ul li:last').fadeOut("slow");
    // });
    //This is supposed to clear entire list.
    $('#clear-btn').click(function() {
        $("div").remove("#list-id");
        $('.btn-danger').hide();
    });

});
