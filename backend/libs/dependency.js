export class Dependency {
  static dependeciesList = {};

  static add(name, dependency){
    if (name in this.dependeciesList){
      throw new Error (`Dependency ${name} already exists.`);
    }
        
    this.dependeciesList[name]=dependency;
  }

  static get(name){
    if (!(name in this.dependeciesList)){
      throw new Error (`Dependency ${name} does not exists.`);
    }

    let dependency = this.dependeciesList[name];
    if (typeof dependency === 'function'){
      dependency = dependency();
    }

    return dependency;
  }
}