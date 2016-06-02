$(document).ready(function() {
    //Creating and preloading some variables to use during function calls.
    var listTag1 = null;
    var listPreTag = "<li class='ui-state-default'>";
    var listPostTag = "</li>";
    var divTag = null;

    //This function was created to test if data is present in user input and append to a UL. This also checks for duplicate items and alerts user.
    function addItem(e) {
        var txtList = $("#txt-input").val();
        if (txtList != '') {
            var exist = $('#sortable > li').text().toLowerCase().indexOf(txtList.toLowerCase());
            if (exist == -1) {
                var itemToAdd = $('#txt-input').val();
                listTag1 = listPreTag + itemToAdd + listPostTag;
                console.log(listTag1)
                $(listTag1).fadeIn('slow').appendTo('#sortable');
                $('#txt-input').val("");
                $('#empty').fadeOut('slow');
            } else {
                swal({title: 'Oops: Duplicate Item.',width: 300,padding: 10,background: '#D5DBF1'})
            }
        } else {
            swal({title: 'Please enter an item.',width: 300,padding: 10,background: '#D5DBF1'})
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
        $('#sortable').on("click", "li", function() {
            //callback function needed here to show full effect of fade before being removed.
            $(this).fadeOut(600, function() {
                $(this).remove();
                if ($('#sortable > li').length == 0) {
                    $('#empty').fadeIn('slow');
                }
            })
        })
    });
    //This function clears every item from the list.
    $('#clear-btn').click(function() {
        $(".ui-state-default").fadeOut('slow');
        $("li").remove(".ui-state-default");
        $('#empty').fadeIn('slow');
    });

    $(function() {
        $("#sortable").sortable();
        $("#sortable").disableSelection();
    });

}); //<--------END SCRIPT
