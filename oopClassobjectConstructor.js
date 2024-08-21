class Student {
  constructor(sid, sName) {
    this.id = sid;
    this.name = sName;
    this.school = "modern school";
  }
}
const student1 = new Student(12, "shuvo");
const student2 = new Student(15, "mahi");
console.log(student1, student2);
console.log(student1.id);
