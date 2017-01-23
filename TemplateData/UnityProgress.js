function UnityProgress(dom) {
    this.message = "";
    this.dom = dom;

    var parent = dom.parentNode;

    this.SetProgress = function(progress) {
        if (progress === 1){
            this.SetMessage("Looking through the telescope...");
        }
        this.Update();
    }

    this.SetMessage = function(message) {
        this.message = message; 
        this.Update();
    }

    this.Clear = function() {
        document.getElementById('loading-box').style.display = "none";
    }

    this.Update = function() {
        document.getElementById('info').innerHTML = this.message;
    }

    this.Update();
}