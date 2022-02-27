// Functions,	Context,	this
// https://epam.sharepoint.com/sites/LMSO/Program/31841d4e1012-0002-9e7e-5f65-56d3fb0f2e14/Functions,%20Context,%20this.pdf

function NamedOne(firstName, lastName) {
  let obj = {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
  };

  Object.defineProperties(obj, {
    firstName: {
      set: (newValue) => {
        this.firstName = newValue;
        this.fullName = `${this.firstName} ${this.lastName}`;
      },
      get: () => {
        return this.firstName;
      },
    },
    lastName: {
      set: (newValue) => {
        this.lastName = newValue;
        this.fullName = `${this.firstName} ${this.lastName}`;
      },
      get: () => {
        return this.lastName;
      },
    },
    fullName: {
      set: (newValue) => {
        try {
          const namesArray = newValue.split(" ");
          if (namesArray.length != 2) throw new Error("trace");
          const first = namesArray[0];
          const last = namesArray[1];
          const checkValue = `${this.firstName} ${this.lastName}`;
          if (newValue != checkValue) {
            this.firstName = first;
            this.lastName = last;
          }
          this.fullName = newValue;
        } catch {
          console.log("wrong data");
        }
      },
      get: () => {
        return this.fullName;
      },
    },
  });
  return obj;
}

const namedOne = new NamedOne("Naomi", "Wang");
namedOne.firstName = "John";
namedOne.lastName = "Doe";

console.log(`${namedOne.fullName} //	->	"John	Doe"`); //	->	"John	Doe"
console.log(`${namedOne.firstName} //	->	"John"`); //	->	"John	Doe"
console.log(`${namedOne.lastName} //	->	"Doe"`); //	->	"John	Doe"

namedOne.fullName = "Bill Smith";

console.log(`${namedOne.firstName} //	->	"Bill"`);
console.log(`${namedOne.lastName} //	->	"Smith"`);

namedOne.fullName = "Tom"; //	->	no	:	lastName	missing
namedOne.fullName = "TomDonnovan"; //	->	no	:	no	space	between	first	&	last	names
console.log(`${namedOne.fullName} //	->	"Bill	Smith"	(unchanged)`);
