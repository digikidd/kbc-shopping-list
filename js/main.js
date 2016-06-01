$(document).ready(function() {
    //Creating and preloading some variables to use during function calls.
    var listTag1 = null;
    var listTag2 = "<div id='list-id' class='col-md-1 card blue darken-4 z-depth-2'><div class='card-content white-text'><span class='card-title'>";
    var listTag3 = "</span></div></div></li>";
    var divTag = null;

    //This function was created to test if data is present in user input and append to a UL. This also checks for duplicate items and alerts user.
    function addItem(e) {
        var txtList = $("#txt-input").val();
        if (txtList != '') {
            var exist = $('#shop-ul > li').text().toLowerCase().indexOf(txtList.toLowerCase());
            if (exist == -1) {
                var itemToAdd = $('#txt-input').val();
                listTag1 = listTag2 + itemToAdd + listTag3;
                divTag = $('<li />', { html: listTag1 }).appendTo('ul.shop-list');
                $('.btn-danger').show();
                $('#txt-input').val("");
                $('#empty').fadeOut('slow');
            } else {
                alert('Duplicate item');
            }
        } else {
            alert('Please enter an item!');
        }
    }
    //This calls a created function to add user input to shopping list
    $('#add-btn').click(addItem);
    //Listening for keypress and calling addItem function if the return key is pressed while in the text input area.
    $(document).on("keypress", function(e) {
        if (e.which == 13) {
            addItem();
        }
    });
    //Handling deleting LIs individually and displaying empty list icon when none are present.
    $(function() {
        $('#shop-ul').on("click", "li", function() {
            $(this).fadeOut('slow');
            $(this).remove();
            if ($('#shop-ul > li').length == 0) {
                $('#empty').fadeIn('slow');
            }
        })
    });
    //This is supposed to clear entire list.
    $('#clear-btn').click(function() {
        $("#list-id").fadeOut('slow');
        $("div").remove("#list-id");
        $('#empty').fadeIn('slow');
    });

}); //<--------END SCRIPT
