import ClassA from "./package-a/module-a";
import * as moduleB from "./package-a/module-b";
import {ClassC} from "./package-a/module-c";
import {ClassD as Foo} from "./package-b/module-d";
import {ClassE1, ClassE2} from "./package-b/module-e";
import {ClassF1, ClassF2 as ClassF42} from "./package-b/module-f";
import ClassG1, { ClassG2 } from "./package-b/package-b2/module-g";
import ClassH1, * as moduleH from "./package-b/package-b2/module-h";
import ClassI1 from "./package-b/package-b2/module-i";
import "./package-b/package-b2/module-j";


const classA = new ClassA();
classA.doSomething();

const classB1 = new moduleB.ClassB1();
classB1.doSomething();

const classB2 = new moduleB.ClassB2();
classB2.doSomething();

const classC = new ClassC();
classC.doSomething();

const foo = new Foo();
foo.doSomething();

const classE1 = new ClassE1();
classE1.doSomething();

const classF1 = new ClassF1();
classF1.doSomething();

const classF42 = new ClassF42();
classF42.doSomething();

const classG1 = new ClassG1();
classG1.doSomething();

const classG2 = new ClassG2();
classG2.doSomething();

const classH1 = new ClassH1();
classH1.doSomething();

const classH2 = new moduleH.ClassH2();
classH2.doSomething();

const classI1 = new ClassI1();
classI1.doSomething();

doSomething();
