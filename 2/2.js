class Circle {
  constructor(radius = 10) {
    this.radius = radius;
  }
  get radi(){
      return this.radius;
  }
  set radi(radi){
      this.radius = radi
  }
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
  getPerimeter() {
    return this.radius * Math.PI * 2;
  }
}


const circle1 = new Circle(11);
console.log(`Area with ${circle1.radi} radius : ` + circle1.getArea())
console.log(`Perimeter with ${circle1.radi} radius : ` +circle1.getPerimeter())

const circle2 = new Circle(4.44)
console.log(`Area with ${circle2.radi} radius : ` +circle2.getArea())
console.log(`Perimeter with ${circle2.radi} radius : `+circle2.getPerimeter())