class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = new Date(dob);
    }
  
    getFullName() {
      return `${this.last_name} ${this.first_name}`;
    }
  
    getAgeInYears() {
      let today = new Date();
      let age = today.getFullYear() - this.dob.getFullYear();
      let m = today.getMonth() - this.dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < this.dob.getDate())) {
        age--;
      }
      return age;
    }
  
    getAgeInDays() {
      let today = new Date();
      let timeDiff = Math.abs(today.getTime() - this.dob.getTime());
      let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return diffDays;
    }
  }
  
  let studentsList = [
  new Student(1,'John','Doe',1,'john@example.com','123456789','2002-01-01'),
  new Student(2,'Jane','Doe',1,'jane@example.com','123456789','2003-01-01'),
  new Student(3,'Jim','Smith',1,'jim@example.com','123456789','2004-01-01'),
  new Student(4,'Jackie','Chan',1,'jackie@example.com','123456789','2005-01-01'),
  new Student(5,'Bruce','Lee',1,'bruce@example.com','123456789','2006-01-01')
  ];
  
  studentsList.sort((a,b) => a.getAgeInDays()-b.getAgeInDays());
  
  console.log(studentsList);
  
  console.log(`Screen width: ${screen.width}, Screen height: ${screen.height}`);