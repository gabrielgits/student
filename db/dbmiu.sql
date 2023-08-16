CREATE DATABASE  IF NOT EXISTS `dbmiu` 
USE `dbmiu`;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `class` varchar(255) DEFAULT NULL,
  `phone_num` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'Bamm','buyantugs.luu@gmail.com',NULL,'3192179113','40'),(2,'Gaba','togs224@gmail.com',NULL,'99090699','30'),(3,'Reach','buyantugs.luu@gmail.com',NULL,'4545484815','25');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;



DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `username` varchar(25) NOT NULL,
  `password` varchar(250) NOT NULL,
  `role` varchar(25) NOT NULL,
  `last_seen` datetime DEFAULT NULL,
  PRIMARY KEY (`username`),
  KEY `pk_name` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('Gaba','$2a$10$wztWJksrFfsum539HLJs6eO/83or.wh69Vf.7vvJgtKY7sBK.oFC2','Student','2023-08-16 09:30:32'),('prof','$2a$10$I5cnCYv2/8TVLTW2KMv90.dCG.WNwknCoN0YZXmgxQqBqjshXaUx2','Professor','2023-08-15 11:22:55'),('qwe','$2a$10$.gyGOTjGqxJYA28XJWX1Ue7Ck7o28e8znIfrHApt79a9.ioFHOT7.','Professor','2023-08-16 10:43:58'),('reach','$2a$10$moqO2GEO9ntuZgjBizGr1u/nmRF3hJypxm6bfx.3bDypUR3C/0fFm','Student','2023-08-16 10:21:25'),('sdfsf','$2a$10$W.cLhhOylk4juewf7tDsCOjO8N/AOKCpAvpsWF6cvT53zfgLuQWzi','Student','2023-08-15 14:30:14'),('student','$2a$10$Mb9YiiUQau0t2rhm6gBHwO9TZruMxuZxk9tiJiVoEOrbuZe.VhkMa','Student','2023-08-15 11:22:45');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;


