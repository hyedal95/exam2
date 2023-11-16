function displaySelectedImage(input) {
    const selectedImage = document.getElementById('selectedImage');
    
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            selectedImage.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        selectedImage.src = '';
    }
}
