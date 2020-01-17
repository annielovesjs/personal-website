class TxtType {
    constructor(el, toRotate, period) {
        this.el = el;
        this.toRotate = toRotate;
        this.period = period;
        this.loopNum = 0;
        this.txt = '';
        this.ticker();
        this.isDeleting = false;
    }

    ticker() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i]; //set full text to string in data text
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1); //deletes char from end --> loop until all is deleted
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1) //if not deleting, add a char from the string until finishe
        }
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>'; //set text to dataset strings
        let that = this;
        let delta = 90; //200 - Math.random() * 100
        if(this.isDeleting) {
            delta /= 2; //deletes at twice the speed it shows
        }
        if(!this.isDeleting && this.txt === fullTxt) {
            delta = this.period; //if text is not deleting, show at 2000ms 
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt == '') {
            this.isDeleting = false; //if text is empty stop deleting 
            this.loopNum++;
            delta = 500;
        }
        setTimeout(()=>{that.ticker();}, delta);
    }
}

export default TxtType;
