$('#imgLoader').on('change',function(){
    //Get the file name
    const fileName = $(this).val().replace('C:\\fakepath\\', " ");
    //Ensure the text color is reverted to black
    const fileInput = $(this).next('.custom-file-label').addClass("text-body");
    //Replace the "Browse to preview an image" label with the file name
    fileInput.html(fileName);
})