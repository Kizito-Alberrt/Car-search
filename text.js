class car{
    gearBox;
    wheels;
    seats;
    windows;
    sideMirrors;
    engine;
    clutch;
    brake;

    constructor(gearBox,wheels,seats,windows,sideMirrors,engine,clutch,brake){
        this.gearBox = gearBox;
        this.wheels = wheels;
        this.seats = seats;
        this.windows = windows;
        this.sideMirrors = sideMirrors;
        this.engine = engine;
        this.clutch = clutch;
        this.brake = brake;
    }
    carSearch(){
        console.log("carSearch" + this.gearBox + this.wheels + this.wheels + this.windows + this.sideMirrors + this.engine + this.clutch + this.brake)
    }
};

const car1 = new car ("manual transmission", "four wheel", "seven windows", "two side mirrors", "EFI engine", "clutch enabled", "instant brake system");
car1.carSearch();
  
