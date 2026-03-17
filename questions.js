const questions = [

/* =========================
MCQ QUESTIONS
========================= */

{
type:"mcq",
question:"What is abstraction in Java?",
options:[
"Hiding implementation details and showing functionality",
"Using loops",
"Creating objects",
"Using arrays"
],
answer:"Hiding implementation details and showing functionality",
hint:"Focus on what, not how"
},

{
type:"mcq",
question:"Which keyword is used to create abstract class?",
options:["abstract","class","interface","extends"],
answer:"abstract",
hint:"abstract class"
},

{
type:"mcq",
question:"Can we create object of abstract class?",
options:["No","Yes","Sometimes","Depends"],
answer:"No",
hint:"Abstract class cannot be instantiated"
},

{
type:"mcq",
question:"What is an abstract method?",
options:[
"Method without body",
"Method with body",
"Constructor",
"Loop"
],
answer:"Method without body",
hint:"Only declaration"
},

{
type:"mcq",
question:"Which class must implement abstract methods?",
options:[
"Child class",
"Parent class",
"Any class",
"Main class"
],
answer:"Child class",
hint:"Must override"
},

{
type:"mcq",
question:"Which keyword is used to inherit abstract class?",
options:["extends","implements","new","import"],
answer:"extends",
hint:"Same as inheritance"
},

{
type:"mcq",
question:"Which keyword is used to implement interface?",
options:["implements","extends","new","import"],
answer:"implements",
hint:"Interface implementation"
},

{
type:"mcq",
question:"Can abstract class have normal methods?",
options:["Yes","No","Sometimes","Depends"],
answer:"Yes",
hint:"Can have both"
},

{
type:"mcq",
question:"Can interface have method body (Java 8+)?",
options:["Yes","No","Sometimes","Never"],
answer:"Yes",
hint:"Default/static methods"
},

{
type:"mcq",
question:"Abstraction is achieved using?",
options:[
"Abstract classes and interfaces",
"Loops",
"Arrays",
"Operators"
],
answer:"Abstract classes and interfaces",
hint:"Main concept"
},

/* =========================
CODING QUESTIONS
========================= */

{
type:"code",
question:"Create an abstract class Animal with abstract method sound()",

required:["abstract","class","void"],

hint:"Abstract method without body",

solution:`abstract class Animal {

  abstract void sound();

}`
},

{
type:"code",
question:"Extend abstract class Animal and implement sound() method",

required:["extends","system.out.println"],

hint:"Override method",

solution:`abstract class Animal {
  abstract void sound();
}

class Dog extends Animal {

  void sound(){
    System.out.println("Dog barks");
  }

  public static void main(String[] args){
    Dog d = new Dog();
    d.sound();
  }
}`
},

{
type:"code",
question:"Create abstract class Shape with abstract method area()",

required:["abstract","class","area"],

hint:"Method without body",

solution:`abstract class Shape {

  abstract void area();

}`
},

{
type:"code",
question:"Create interface Animal and implement it in Dog class",

required:["interface","implements","system.out.println"],

hint:"Interface example",

solution:`interface Animal {
  void sound();
}

class Dog implements Animal {

  public void sound(){
    System.out.println("Dog barks");
  }

  public static void main(String[] args){
    Dog d = new Dog();
    d.sound();
  }
}`
},

{
type:"code",
question:"Create abstract class with both abstract and normal method",

required:["abstract","system.out.println"],

hint:"Combine both methods",

solution:`abstract class Demo {

  abstract void show();

  void display(){
    System.out.println("Normal method");
  }
}

class Test extends Demo {

  void show(){
    System.out.println("Abstract method implemented");
  }

  public static void main(String[] args){
    Test t = new Test();
    t.show();
    t.display();
  }
}`
},

{
type:"code",
question:"Create interface with two methods and implement both",

required:["interface","implements","system.out.println"],

hint:"Multiple methods",

solution:`interface Test {
  void method1();
  void method2();
}

class Demo implements Test {

  public void method1(){
    System.out.println("Method 1");
  }

  public void method2(){
    System.out.println("Method 2");
  }

  public static void main(String[] args){
    Demo d = new Demo();
    d.method1();
    d.method2();
  }
}`
}

]