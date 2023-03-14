
/**********************************************************************************************************************/
/******************************************************* Model ********************************************************/
/**********************************************************************************************************************/

/**
 *
 */
class Employee {

  public id: string;
  public active: boolean;
  public address: string;
  public bankAccount: string;
  public bankInstitution: string;
  public birthDate: Date;
  public cvPDF: string;
  public department: string;
  public emergencyContactAddress: string;
  public emergencyContactEmail: string;
  public emergencyContactFirstName: string;
  public emergencyContactLastName: string;
  public emergencyContactMiddleName: string;
  public emergencyContactTelephone: string;
  public employmentDate: Date;
  public employeeNumber: string;
  public firstName: string;
  public highestLevelEducationInstitution: string;
  public highestLevelEducationLevel: string;
  public highestLevelEducationSpecialization: string;
  public highestLevelEducationYear: string;
  public lastName: string;
  public managerId: string;
  public maritalStatus: string;
  public middleName: string;
  public nationalIDNumber: string;
  public numberOfChildren: number;
  public photo: string;
  public religion: string;
  public telephone: string;
  public title: string;
  public telephoneNumber: string;
  public workEmail: string;
  public workLocation: string;


  constructor(
    id: string,
    active: boolean,
    address: string,
    bankAccount: string,
    bankInstitution: string,
    birthDate: Date,
    cvPDF: string,
    department: string,
    emergencyContactAddress: string,
    emergencyContactEmail: string,
    emergencyContactFirstName: string,
    emergencyContactLastName: string,
    emergencyContactMiddleName: string,
    emergencyContactTelephone: string,
    employmentDate: Date,
    employeeNumber: string,
    firstName: string,
    highestLevelEducationInstitution: string,
    highestLevelEducationLevel: string,
    highestLevelEducationSpecialization: string,
    highestLevelEducationYear: string,
    lastName: string,
    managerId: string,
    maritalStatus: string,
    middleName: string,
    nationalIDNumber: string,
    numberOfChildren: number,
    photo: string,
    religion: string,
    telephone: string,
    title: string,
    telephoneNumber: string,
    workEmail: string,
    workLocation: string
  ) {
    this.id = id;
    this.active = active;
    this.address = address;
    this.bankAccount = bankAccount;
    this.bankInstitution = bankInstitution;
    this.birthDate = birthDate;
    this.cvPDF = cvPDF;
    this.department = department;
    this.emergencyContactAddress = emergencyContactAddress;
    this.emergencyContactEmail = emergencyContactEmail;
    this.emergencyContactFirstName = emergencyContactFirstName;
    this.emergencyContactLastName = emergencyContactLastName;
    this.emergencyContactMiddleName = emergencyContactMiddleName;
    this.emergencyContactTelephone = emergencyContactTelephone;
    this.employmentDate = employmentDate;
    this.employeeNumber = employeeNumber;
    this.firstName = firstName;
    this.highestLevelEducationInstitution = highestLevelEducationInstitution;
    this.highestLevelEducationLevel = highestLevelEducationLevel;
    this.highestLevelEducationSpecialization = highestLevelEducationSpecialization;
    this.highestLevelEducationYear = highestLevelEducationYear;
    this.lastName = lastName;
    this.managerId = managerId;
    this.maritalStatus = maritalStatus;
    this.middleName = middleName;
    this.nationalIDNumber = nationalIDNumber;
    this.numberOfChildren = numberOfChildren;
    this.photo = photo;
    this.religion = religion;
    this.telephone = telephone;
    this.title = title;
    this.telephoneNumber = telephoneNumber;
    this.workEmail = workEmail;
    this.workLocation = workLocation;
  }

  public getFullName(): string {
    return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
  }

  public getCardInformation(): { title: string, name: string, email: string, telephone: string } {
    return { title: this.title, name: this.getFullName(), email: this.workEmail, telephone: this.telephone };
  }

  public getEmergencyInformation(): { address: string, name: string, email: string, telephone: string } {
    return {
      address: this.emergencyContactAddress,
      email: this.emergencyContactEmail,
      name: this.emergencyContactFirstName + ' ' + this.emergencyContactLastName + ' ' + this.emergencyContactMiddleName,
      telephone: this.emergencyContactTelephone
    }
  }

}

/**********************************************************************************************************************/
/*************************************************** Export Methods ***************************************************/
/**********************************************************************************************************************/

module.exports = { Employee };
