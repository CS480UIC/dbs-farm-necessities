CREATE DATABASE  IF NOT EXISTS `farm_necessities` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `farm_necessities`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: farm_necessities
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
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `address_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `address` varchar(120) NOT NULL,
  PRIMARY KEY (`address_id`),
  KEY `user_id` (`user_id`),
  KEY `user_address` (`user_id`,`address_id`),
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,1,'123 St cali'),(2,2,'390 Roosewelt'),(3,3,'1206 W lexington'),(4,4,'new york'),(5,5,'130 st newton');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  KEY `product_id` (`product_id`),
  KEY `user_id` (`user_id`),
  KEY `user_cart` (`user_id`,`product_id`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,2,1),(2,3,2),(3,4,23),(4,5,4),(5,1,2);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `status` enum('active','inactive') NOT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  KEY `category_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'aa','active'),(2,'bb','active'),(3,'cc','active'),(4,'gg','active'),(5,'kk','inactive');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_detail`
--

DROP TABLE IF EXISTS `order_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_detail` (
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `quantity` int NOT NULL,
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  KEY `order_product` (`order_id`,`product_id`),
  CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order_history` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_detail`
--

LOCK TABLES `order_detail` WRITE;
/*!40000 ALTER TABLE `order_detail` DISABLE KEYS */;
INSERT INTO `order_detail` VALUES (1,1,2),(2,2,3),(3,3,4),(4,3,2),(4,4,5);
/*!40000 ALTER TABLE `order_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_history`
--

DROP TABLE IF EXISTS `order_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_history` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `payment_id` int NOT NULL,
  `address_id` int NOT NULL,
  `delivery_date` date DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `address_id` (`address_id`),
  KEY `payment_id` (`payment_id`),
  KEY `user_id` (`user_id`),
  KEY `payment_order` (`payment_id`,`order_id`),
  CONSTRAINT `order_history_ibfk_1` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `order_history_ibfk_2` FOREIGN KEY (`payment_id`) REFERENCES `payment_detail` (`payment_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `order_history_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_history`
--

LOCK TABLES `order_history` WRITE;
/*!40000 ALTER TABLE `order_history` DISABLE KEYS */;
INSERT INTO `order_history` VALUES (1,1,1,1,'2021-02-02'),(2,2,2,2,'2021-04-01'),(3,3,3,3,'2021-07-01'),(4,3,3,4,'2021-02-25'),(5,4,4,5,'2021-12-31');
/*!40000 ALTER TABLE `order_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_detail`
--

DROP TABLE IF EXISTS `payment_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_detail` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `card_number` varchar(16) NOT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `user_id` (`user_id`),
  KEY `card_num` (`card_number`),
  CONSTRAINT `payment_detail_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_detail`
--

LOCK TABLES `payment_detail` WRITE;
/*!40000 ALTER TABLE `payment_detail` DISABLE KEYS */;
INSERT INTO `payment_detail` VALUES (1,1,'300'),(2,2,'3333'),(3,3,'4444'),(4,4,'191'),(5,5,'14445');
/*!40000 ALTER TABLE `payment_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `price` decimal(20,2) NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `user_id` (`user_id`),
  KEY `name_product` (`name`,`product_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,4,'car','asda',199.00),(2,5,'toy','toy',1999.00),(3,6,'ball','round',123.00),(4,4,'phone','new',1999.00),(5,5,'mouse','alive',124.00);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category` (
  `product_id` int NOT NULL,
  `category_id` int NOT NULL,
  KEY `category_id` (`category_id`),
  KEY `prod_cat` (`product_id`,`category_id`),
  CONSTRAINT `product_category_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `product_category_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (1,1),(2,2),(3,3),(4,4),(5,5);
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating` (
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `rating` int NOT NULL,
  `review` varchar(100) DEFAULT NULL,
  KEY `product_id` (`product_id`),
  KEY `user_id` (`user_id`),
  KEY `prod_user` (`product_id`,`user_id`),
  CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES (1,1,8,'ok'),(2,2,9,'good'),(3,3,8,'ok'),(4,4,8,'good'),(5,5,9,'excellent');
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `name` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(50) NOT NULL,
  `user_id` int NOT NULL AUTO_INCREMENT,
  `phone_number` varchar(10) NOT NULL,
  `account_type` enum('seller','buyer') NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('Vedant','123123','v@v.com',1,'7784461212','buyer'),('aakash jain','3030','s@s',2,'998','buyer'),('mayur ','3030','v@t',3,'992','buyer'),('harsh','1212','h@h',4,'9982','seller'),('John','121','f@j',5,'123123','seller'),('Mehul','mehul12','mehul@mehul',6,'667788334','seller'),('Mayur','$2a$12$5FAOymCJMXIRwn1g4uE21OJkc3vnYyXhsk.RHKnLI0rNX4fpXFp6m','mmule2@uic.edu',8,'1234543211','buyer');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `view_1`
--

DROP TABLE IF EXISTS `view_1`;
/*!50001 DROP VIEW IF EXISTS `view_1`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_1` AS SELECT 
 1 AS `user_id`,
 1 AS `product_id`,
 1 AS `rating`,
 1 AS `review`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_10`
--

DROP TABLE IF EXISTS `view_10`;
/*!50001 DROP VIEW IF EXISTS `view_10`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_10` AS SELECT 
 1 AS `user_id`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_2`
--

DROP TABLE IF EXISTS `view_2`;
/*!50001 DROP VIEW IF EXISTS `view_2`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_2` AS SELECT 
 1 AS `user_id`,
 1 AS `product_id`,
 1 AS `rating`,
 1 AS `review`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_3`
--

DROP TABLE IF EXISTS `view_3`;
/*!50001 DROP VIEW IF EXISTS `view_3`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_3` AS SELECT 
 1 AS `user_id`,
 1 AS `product_id`,
 1 AS `quantity`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_4`
--

DROP TABLE IF EXISTS `view_4`;
/*!50001 DROP VIEW IF EXISTS `view_4`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_4` AS SELECT 
 1 AS `concat(name,' ',description)`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_5`
--

DROP TABLE IF EXISTS `view_5`;
/*!50001 DROP VIEW IF EXISTS `view_5`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_5` AS SELECT 
 1 AS `user_id`,
 1 AS `number_of_orders`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_6`
--

DROP TABLE IF EXISTS `view_6`;
/*!50001 DROP VIEW IF EXISTS `view_6`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_6` AS SELECT 
 1 AS `order_id`,
 1 AS `day(delivery_date)`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_7`
--

DROP TABLE IF EXISTS `view_7`;
/*!50001 DROP VIEW IF EXISTS `view_7`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_7` AS SELECT 
 1 AS `user_id`,
 1 AS `card_number`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_8`
--

DROP TABLE IF EXISTS `view_8`;
/*!50001 DROP VIEW IF EXISTS `view_8`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_8` AS SELECT 
 1 AS `product_name`,
 1 AS `category_name`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_9`
--

DROP TABLE IF EXISTS `view_9`;
/*!50001 DROP VIEW IF EXISTS `view_9`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_9` AS SELECT 
 1 AS `name`,
 1 AS `password`,
 1 AS `email`,
 1 AS `user_id`,
 1 AS `phone_number`,
 1 AS `account_type`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'farm_necessities'
--

--
-- Dumping routines for database 'farm_necessities'
--

--
-- Final view structure for view `view_1`
--

/*!50001 DROP VIEW IF EXISTS `view_1`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`farm_necessities`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_1` AS select `rating`.`user_id` AS `user_id`,`rating`.`product_id` AS `product_id`,`rating`.`rating` AS `rating`,`rating`.`review` AS `review` from `rating` where (`rating`.`product_id` in (1,2,3)) order by `rating`.`rating` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_10`
--

/*!50001 DROP VIEW IF EXISTS `view_10`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`farm_necessities`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_10` AS select distinct `order_history`.`user_id` AS `user_id` from `order_history` where exists(select 1 from `payment_detail` where (`payment_detail`.`payment_id` = `order_history`.`payment_id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_2`
--

/*!50001 DROP VIEW IF EXISTS `view_2`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`farm_necessities`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_2` AS select `rating`.`user_id` AS `user_id`,`rating`.`product_id` AS `product_id`,`rating`.`rating` AS `rating`,`rating`.`review` AS `review` from `rating` where (`rating`.`rating` > (select avg(`rating`.`rating`) from `rating`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_3`
--

/*!50001 DROP VIEW IF EXISTS `view_3`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`farm_necessities`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_3` AS select `cart`.`user_id` AS `user_id`,`cart`.`product_id` AS `product_id`,`cart`.`quantity` AS `quantity` from `cart` where (`cart`.`user_id` in (3,2)) order by `cart`.`quantity` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_4`
--

/*!50001 DROP VIEW IF EXISTS `view_4`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`farm_necessities`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_4` AS select concat(`product`.`name`,' ',`product`.`description`) AS `concat(name,' ',description)` from `product` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_5`
--

/*!50001 DROP VIEW IF EXISTS `view_5`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`farm_necessities`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_5` AS select `order_history`.`user_id` AS `user_id`,count(0) AS `number_of_orders` from `order_history` group by `order_history`.`user_id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_6`
--

/*!50001 DROP VIEW IF EXISTS `view_6`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`farm_necessities`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_6` AS select `order_history`.`order_id` AS `order_id`,dayofmonth(`order_history`.`delivery_date`) AS `day(delivery_date)` from `order_history` where (month(`order_history`.`delivery_date`) > 5) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_7`
--

/*!50001 DROP VIEW IF EXISTS `view_7`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`farm_necessities`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_7` AS select `payment_detail`.`user_id` AS `user_id`,`payment_detail`.`card_number` AS `card_number` from `payment_detail` where (`payment_detail`.`payment_id` in (1,3,5)) order by `payment_detail`.`card_number` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_8`
--

/*!50001 DROP VIEW IF EXISTS `view_8`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`farm_necessities`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_8` AS select `b`.`name` AS `product_name`,`c`.`name` AS `category_name` from ((`product_category` `a` join `product` `b` on((`a`.`product_id` = `b`.`product_id`))) join `category` `c` on((`a`.`category_id` = `c`.`category_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_9`
--

/*!50001 DROP VIEW IF EXISTS `view_9`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`farm_necessities`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_9` AS select `user`.`name` AS `name`,`user`.`password` AS `password`,`user`.`email` AS `email`,`user`.`user_id` AS `user_id`,`user`.`phone_number` AS `phone_number`,`user`.`account_type` AS `account_type` from `user` where `user`.`user_id` in (select `product`.`user_id` from `product`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-27  0:25:31
