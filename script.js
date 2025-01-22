const PI = 3.14;
let radius = 6378e3;
let circumference = 2 * PI * radius;
let surfaceArea = 4 * PI * radius**2;
let volume = (4/3) * PI * radius**3;


document.write("The radius of the sphere is " + radius + ".");
document.write("<br>");
document.write("The circumference is " + circumference + ".");
document.write("<br>");
document.write("The surface area is " + surfaceArea + ".");
document.write("<br>");
document.write("The volume is " + volume + ".");
