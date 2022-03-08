CREATE TABLE `country` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(350),
	actived TINYINT DEFAULT '1',
    roledId INT DEFAULT NULL,
    createdBy VARCHAR(50) DEFAULT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedBy VARCHAR(50) DEFAULT NULL,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- 
CREATE TABLE `province` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    countryId INT,
    name VARCHAR(350),
        actived TINYINT DEFAULT '1',
    roledId INT DEFAULT NULL,
    createdBy VARCHAR(50) DEFAULT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedBy VARCHAR(50) DEFAULT NULL,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `district` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    provinceId INT,
    name VARCHAR(350),
        actived TINYINT DEFAULT '1',
    roledId INT DEFAULT NULL,
    createdBy VARCHAR(50) DEFAULT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedBy VARCHAR(50) DEFAULT NULL,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `ward` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    districtId INT,
    name VARCHAR(350),
	actived TINYINT DEFAULT '1',
    roledId INT DEFAULT NULL,
    createdBy VARCHAR(50) DEFAULT NULL,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedBy VARCHAR(50) DEFAULT NULL,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `user` (
  Id int NOT NULL AUTO_INCREMENT,
  username varchar(250) DEFAULT NULL,
  password varchar(250) DEFAULT NULL,
  email varchar(250) DEFAULT NULL,
  birthDate date DEFAULT NULL,
  firstName varchar(300) DEFAULT NULL,
  LastName varchar(300) DEFAULT NULL,
  isAdmin int DEFAULT NULL,
  isActive int DEFAULT NULL,
  phone varchar(50) DEFAULT NULL,
  firstLogin datetime DEFAULT NULL,
  lastLogin datetime DEFAULT NULL,
  countryId int DEFAULT NULL,
  provinceId int DEFAULT NULL,
  districtId int DEFAULT NULL,
  wardId int DEFAULT NULL,
  actived tinyint DEFAULT '1',
  roledId int DEFAULT NULL,
  addressDes varchar(1000) DEFAULT NULL,
  note varchar(1000) DEFAULT NULL,
  createdBy varchar(50) DEFAULT NULL,
  createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedBy varchar(50) DEFAULT NULL,
  updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
