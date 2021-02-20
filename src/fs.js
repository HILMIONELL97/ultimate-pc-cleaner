const fs = require("fs");
const path = require("path");

const directory = "C:/DevTools/caches";
document.getElementById("btn2").style.display = "none";
let i = 0;

function move() {
    if (i == 0) {
        i = 1;
        let elem = document.getElementById("BarProgress");
        document.getElementById("DeleteProgressBtn").style.display = "block";
        document.getElementById("btn").style.display = "none";
        document.getElementById("hidding").style.display = "none";

        let width = 1;
        let id = setInterval(frame, 20);

        function frame() {
            if (width >= 100) {
                // -----------------------------------
                fs.readdir(directory, (err, files) => {
                    if (err) throw err;
                    if (files.length === 0) {
                        document.getElementById("txt").innerHTML = "No file found!";
                        document.getElementById("btn2").style.display = "block";
                        document.getElementById("btn2").style.marginLeft = "-5rem";
                        return;
                    } else {
                        for (const file of files) {
                            document.getElementById("txt").innerHTML =
                                files.length + " files deleted!";
                            fs.unlink(path.join(directory, file), (err) => {
                                if (err) throw err;
                                document.getElementById("btn2").style.display = "block";
                                return;
                            });
                        }
                    }
                });

                // -----------------------------------
                clearInterval(id);
                i = 0;
                elem.style.display = "none";
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
};

function home() {
    location.reload();
}