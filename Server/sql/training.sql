-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: training
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authentication`
--

DROP TABLE IF EXISTS `authentication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authentication` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(55) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `actived` tinyint DEFAULT '1',
  `roledId` int DEFAULT NULL,
  `createdBy` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(50) DEFAULT NULL,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authentication`
--

LOCK TABLES `authentication` WRITE;
/*!40000 ALTER TABLE `authentication` DISABLE KEYS */;
/*!40000 ALTER TABLE `authentication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(350) DEFAULT NULL,
  `actived` tinyint DEFAULT '1',
  `roledId` int DEFAULT NULL,
  `createdBy` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(50) DEFAULT NULL,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'VIETNAM',1,NULL,NULL,'2022-03-04 07:49:51',NULL,'2022-03-04 07:49:51'),(2,'KOREA',1,NULL,NULL,'2022-03-04 07:49:53',NULL,'2022-03-04 07:49:53'),(3,'USA',1,NULL,NULL,'2022-03-04 07:49:54',NULL,'2022-03-04 07:49:54'),(4,'CANADA',1,NULL,NULL,'2022-03-04 07:50:10',NULL,'2022-03-04 07:50:10'),(5,'CHINA',1,NULL,NULL,'2022-03-04 07:50:11',NULL,'2022-03-04 07:50:11'),(6,'JAPAN',1,NULL,NULL,'2022-03-04 07:51:52',NULL,'2022-03-04 07:51:52'),(7,'LAO',1,NULL,NULL,'2022-03-04 15:58:20',NULL,'2022-03-04 15:58:20'),(8,NULL,1,NULL,NULL,'2022-03-04 16:45:55',NULL,'2022-03-04 16:45:55');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `district`
--

DROP TABLE IF EXISTS `district`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `district` (
  `id` int NOT NULL AUTO_INCREMENT,
  `provinceId` int DEFAULT NULL,
  `name` varchar(350) DEFAULT NULL,
  `actived` tinyint DEFAULT '1',
  `roledId` int DEFAULT NULL,
  `createdBy` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(50) DEFAULT NULL,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `district`
--

LOCK TABLES `district` WRITE;
/*!40000 ALTER TABLE `district` DISABLE KEYS */;
INSERT INTO `district` VALUES (1,3,'PHONG DIEN',1,NULL,NULL,'2022-03-05 15:42:35',NULL,'2022-03-05 15:42:35'),(2,3,'CAI RANG',1,NULL,NULL,'2022-03-05 15:42:42',NULL,'2022-03-05 15:42:42'),(3,3,'NINH KIEU',1,NULL,NULL,'2022-03-05 15:42:49',NULL,'2022-03-05 15:42:49'),(4,4,'LONG MY',1,NULL,NULL,'2022-03-05 15:43:00',NULL,'2022-03-05 15:43:00'),(5,4,'VI THANH',1,NULL,NULL,'2022-03-05 15:43:09',NULL,'2022-03-05 15:43:09'),(6,4,'VI THUY',1,NULL,NULL,'2022-03-05 15:43:13',NULL,'2022-03-05 15:43:13');
/*!40000 ALTER TABLE `district` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `province`
--

DROP TABLE IF EXISTS `province`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `province` (
  `id` int NOT NULL AUTO_INCREMENT,
  `countryId` int DEFAULT NULL,
  `name` varchar(350) DEFAULT NULL,
  `actived` tinyint DEFAULT '1',
  `roledId` int DEFAULT NULL,
  `createdBy` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(50) DEFAULT NULL,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `province`
--

LOCK TABLES `province` WRITE;
/*!40000 ALTER TABLE `province` DISABLE KEYS */;
INSERT INTO `province` VALUES (3,1,'CAN THO',1,NULL,NULL,'2022-03-05 15:40:18',NULL,'2022-03-05 15:40:18'),(4,1,'HAU GIANG',1,NULL,NULL,'2022-03-05 15:40:29',NULL,'2022-03-05 15:40:29'),(5,1,'HA NOI',1,NULL,NULL,'2022-03-05 15:40:43',NULL,'2022-03-05 15:40:43'),(6,1,'TP HCM',1,NULL,NULL,'2022-03-05 15:40:50',NULL,'2022-03-05 15:40:50'),(7,1,'CA MAU',1,NULL,NULL,'2022-03-05 15:41:00',NULL,'2022-03-05 15:41:00');
/*!40000 ALTER TABLE `province` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `actived` tinyint DEFAULT '1',
  `createdBy` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(50) DEFAULT NULL,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'TESTT',1,NULL,'2022-03-01 17:03:36',NULL,'2022-03-01 17:03:36');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(250) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `birthDate` date DEFAULT NULL,
  `firstName` varchar(300) DEFAULT NULL,
  `LastName` varchar(300) DEFAULT NULL,
  `isAdmin` int DEFAULT NULL,
  `isActive` int DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `firstLogin` datetime DEFAULT NULL,
  `lastLogin` datetime DEFAULT NULL,
  `countryId` int DEFAULT NULL,
  `provinceId` int DEFAULT NULL,
  `districtId` int DEFAULT NULL,
  `wardId` int DEFAULT NULL,
  `actived` tinyint DEFAULT '1',
  `roledId` int DEFAULT NULL,
  `addressDes` varchar(1000) DEFAULT NULL,
  `note` varchar(1000) DEFAULT NULL,
  `createdBy` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(50) DEFAULT NULL,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (4,'Mbappe','123456','admin@mail.com','2022-01-02','Kylian','Mbappe',0,0,'123422256','2022-03-07 03:15:23','2022-03-07 03:15:23',1,4,5,19,1,NULL,NULL,NULL,NULL,'2022-03-07 03:15:23',NULL,'2022-03-19 15:56:16'),(5,'LeVan','1234','dddddd@mail.com','2022-01-02','Mbappe','Mbappe',0,0,'123422256','2022-03-07 04:26:24','2022-03-07 04:26:24',1,3,2,12,1,NULL,NULL,NULL,NULL,'2022-03-07 04:26:24',NULL,'2022-03-16 09:09:29'),(34,'CrisRonaldo','123456','112duy@mail.com','2022-03-09','Ronaldo','Duy',0,1,'123456787','2022-03-09 17:23:20','2022-03-09 17:23:20',1,4,4,2,1,NULL,'160 NGUYEN VAN A','HAHA',NULL,'2022-03-09 17:23:20',NULL,'2022-03-16 09:04:30'),(35,'Mason','123456','test@mail.com','2022-03-09','Pepea','Geo',1,1,'123456786','2022-03-09 18:13:28','2022-03-09 18:13:28',1,4,5,17,1,NULL,'','',NULL,'2022-03-09 18:13:28',NULL,'2022-03-10 14:59:43'),(42,'LeVanAA','123456','test22@mail.com','2022-03-18','Le','VanKK',1,1,'1234567','2022-03-18 08:11:05','2022-03-18 08:11:05',1,4,5,17,1,NULL,'','',NULL,'2022-03-18 08:11:05',NULL,'2022-03-18 08:11:05'),(44,'test2','123456','test2@mail.com','2022-03-19','levan','abc',0,0,'1234567','2022-03-19 15:52:33','2022-03-19 15:52:33',1,3,3,11,1,NULL,'12121','212121',NULL,'2022-03-19 15:52:33',NULL,'2022-03-19 15:52:33');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ward`
--

DROP TABLE IF EXISTS `ward`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ward` (
  `id` int NOT NULL AUTO_INCREMENT,
  `districtId` int DEFAULT NULL,
  `name` varchar(350) DEFAULT NULL,
  `actived` tinyint DEFAULT '1',
  `roledId` int DEFAULT NULL,
  `createdBy` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` varchar(50) DEFAULT NULL,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ward`
--

LOCK TABLES `ward` WRITE;
/*!40000 ALTER TABLE `ward` DISABLE KEYS */;
INSERT INTO `ward` VALUES (1,4,'THUAN HUNG',1,NULL,NULL,'2022-03-06 19:20:00',NULL,'2022-03-06 19:20:00'),(2,4,'THUAN HOA',1,NULL,NULL,'2022-03-06 19:20:06',NULL,'2022-03-06 19:20:06'),(3,4,'THUAN HUNG',1,NULL,NULL,'2022-03-06 19:20:11',NULL,'2022-03-06 19:20:11'),(4,4,'VINH VIEN',1,NULL,NULL,'2022-03-06 19:20:20',NULL,'2022-03-06 19:20:20'),(5,1,'MY KHANH',1,NULL,NULL,'2022-03-07 02:12:41',NULL,'2022-03-07 02:12:41'),(6,1,'NHON NGHIA',1,NULL,NULL,'2022-03-07 02:12:49',NULL,'2022-03-07 02:12:49'),(7,1,'GIAI XUAN',1,NULL,NULL,'2022-03-07 02:12:55',NULL,'2022-03-07 02:12:55'),(8,3,'AN BINH',1,NULL,NULL,'2022-03-07 02:15:39',NULL,'2022-03-07 02:15:39'),(9,3,'AN CU',1,NULL,NULL,'2022-03-07 02:15:43',NULL,'2022-03-07 02:15:43'),(10,3,'AN HOA',1,NULL,NULL,'2022-03-07 02:15:47',NULL,'2022-03-07 02:15:47'),(11,3,'AN KHANH',1,NULL,NULL,'2022-03-07 02:15:52',NULL,'2022-03-07 02:15:52'),(12,2,'HUNG PHU',1,NULL,NULL,'2022-03-07 09:32:06',NULL,'2022-03-07 09:32:06'),(13,2,'HUNG THANH',1,NULL,NULL,'2022-03-07 09:32:06',NULL,'2022-03-07 09:32:06'),(14,2,'BA LANG',1,NULL,NULL,'2022-03-07 09:32:06',NULL,'2022-03-07 09:32:06'),(15,2,'LE BINH',1,NULL,NULL,'2022-03-07 09:32:06',NULL,'2022-03-07 09:32:06'),(16,5,'PHUONG 1',1,NULL,NULL,'2022-03-07 09:39:18',NULL,'2022-03-07 09:39:18'),(17,5,'PHUONG 2',1,NULL,NULL,'2022-03-07 09:39:18',NULL,'2022-03-07 09:39:18'),(18,5,'PHUONG 3',1,NULL,NULL,'2022-03-07 09:39:18',NULL,'2022-03-07 09:39:18'),(19,5,'PHUONG 4',1,NULL,NULL,'2022-03-07 09:39:18',NULL,'2022-03-07 09:39:18'),(20,6,'PHUONG 1',1,NULL,NULL,'2022-03-07 09:40:50',NULL,'2022-03-07 09:40:50'),(21,6,'PHUONG 2',1,NULL,NULL,'2022-03-07 09:40:50',NULL,'2022-03-07 09:40:50'),(22,6,'PHUONG 3',1,NULL,NULL,'2022-03-07 09:40:50',NULL,'2022-03-07 09:40:50'),(23,6,'PHUONG 4',1,NULL,NULL,'2022-03-07 09:40:50',NULL,'2022-03-07 09:40:50');
/*!40000 ALTER TABLE `ward` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-19 23:01:39
