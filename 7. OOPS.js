

// Classes
class ES6{
    constructor(){
        this.a = 10
    }
    add(){
        console.log(this.a)
    }
    subtract(){
        console.log(this.a)
    }
}
// Objects
var obj = new ES6() // Constructor with the same name as class name
obj.add()
obj.subtract()
// Inheritance
    // Single Inheritance
    class A {
        add(){
            console.log("Function belongs to A")
        }
    }
    class B extends A{
    }
    var singleInheritance = new B()
    singleInheritance.add()
    // Multilevel Inheritance
    class C extends B{
    }
    var multilevel = new C()
    multilevel.add()
    // Heirarchical Inheritance
    class E{
        subtract(){
            console.log("This belongs to E class")
        }
    }
    class F extends E{
    }
    class G extends E{
    }
    var heirarchicalF = new F()
    heirarchicalF.subtract()
    var heirarchicalG = new G()
    heirarchicalG.subtract()
    // Multiple Inheritance => Not available
// Polymorphism
    // Overloading
    class Overloading{
        add(a,b){
            console.log("This is first function:"+ a+b)
        }
        add(a,b,c){
            console.log("This is second function"+ a+b+c)
        }
    }
    var overloadingObj = new Overloading()
    overloadingObj.add(1,2)

    // Overriding
    class H{
        display(){
            console.log("Super Class H Function")
        }
    }
    class I extends H{
        display(){
            console.log("Derived Class I Function")
        }
        anyMethod(){
            super.display()
        }
    }
    var derivedClass = new I()
    derivedClass.display()
    derivedClass.anyMethod()

// Abstraction
    // Interfaces
// Encapsulation
// Modules
