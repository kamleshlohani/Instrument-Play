var totaldrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < totaldrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",
        handle);
    function handle() {
        var buttoninnerH = this.innerHTML;
        makesound(buttoninnerH);


    }

    document.addEventListener("keypress", function (event) {
        makesound(event.key);
    });



    function makesound(key) {

        switch (key) {
            case "w":

                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":

                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":

                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":

                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":

                var cr = new Audio('sounds/kick-bass.mp3');
                cr.play();
                break;

            case "k":

                var cr = new Audio('sounds/crash.mp3');
                cr.play();
                break;
            case "l":

                var sn = new Audio('sounds/snare.mp3');
                sn.play();
                break;

            default:
                console.log(buttoninnerH);
        };
    }
}




