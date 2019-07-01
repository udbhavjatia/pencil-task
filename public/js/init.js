//Instantiate canvas
const canvas = new fabric.Canvas('c');

document.getElementById('imgLoader').onchange = function handleImage(e) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const imgObj = new Image();
        imgObj.src = event.target.result;

        imgObj.onload = function () {
            //Start to interact with fabricJS
            const image = new fabric.Image(imgObj);
                        
            //Scale image to fit canvas
            image.scaleToWidth(canvas.getWidth());
            canvas.add(image);

            //End interaction with fabricJS
        }
            
    }
    reader.readAsDataURL(e.target.files[0]);
}