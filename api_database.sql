-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.0-dmr-log - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para api_database
CREATE DATABASE IF NOT EXISTS `api_database` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `api_database`;

-- Volcando estructura para tabla api_database.api_command_instance
CREATE TABLE IF NOT EXISTS `api_command_instance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `command` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `pid` int(11) NOT NULL,
  `expirationDate` datetime(6) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla api_database.api_command_instance: ~-1 rows (aproximadamente)
DELETE FROM `api_command_instance`;
/*!40000 ALTER TABLE `api_command_instance` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_command_instance` ENABLE KEYS */;

-- Volcando estructura para tabla api_database.api_command_log
CREATE TABLE IF NOT EXISTS `api_command_log` (
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `command` varchar(255) NOT NULL,
  `commandInput` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla api_database.api_command_log: ~-1 rows (aproximadamente)
DELETE FROM `api_command_log`;
/*!40000 ALTER TABLE `api_command_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_command_log` ENABLE KEYS */;

-- Volcando estructura para tabla api_database.api_command_pid
CREATE TABLE IF NOT EXISTS `api_command_pid` (
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL,
  `alive` int(11) NOT NULL,
  `softDeleted` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla api_database.api_command_pid: ~-1 rows (aproximadamente)
DELETE FROM `api_command_pid`;
/*!40000 ALTER TABLE `api_command_pid` DISABLE KEYS */;
INSERT INTO `api_command_pid` (`createdAt`, `updatedAt`, `id`, `pid`, `alive`, `softDeleted`) VALUES
	('2020-07-22 04:40:30', '2020-07-22 04:41:31', 1, 21432, 0, 0),
	('2020-07-22 04:42:14', '2020-07-22 04:42:15', 2, 9316, 0, 0),
	('2020-07-22 04:42:36', '2020-07-22 04:42:36', 3, 9808, 0, 0),
	('2020-07-22 04:43:18', '2020-07-22 04:43:19', 4, 18228, 0, 0),
	('2020-07-22 04:43:46', '2020-07-22 04:43:46', 5, 21412, 0, 0),
	('2020-07-22 04:44:44', '2020-07-22 04:44:44', 6, 8040, 0, 0),
	('2020-07-22 04:45:14', '2020-07-22 04:46:15', 7, 20884, 0, 0),
	('2020-07-22 04:47:12', '2020-07-22 04:48:12', 8, 20756, 0, 0),
	('2020-07-22 04:48:24', '2020-07-22 04:48:25', 9, 15744, 0, 0),
	('2020-07-22 04:49:57', '2020-07-22 04:49:57', 10, 2424, 0, 0),
	('2020-07-22 04:51:41', '2020-07-22 04:53:41', 11, 11012, 0, 0),
	('2020-07-22 04:56:36', '2020-07-22 04:56:36', 12, 15800, 0, 0),
	('2020-07-22 04:57:33', '2020-07-22 04:58:34', 13, 5784, 0, 0),
	('2020-07-22 04:59:29', '2020-07-22 05:00:30', 14, 3548, 0, 0),
	('2020-07-22 05:02:25', '2020-07-22 05:03:26', 15, 15716, 0, 0),
	('2020-07-22 05:03:59', '2020-07-22 05:04:59', 16, 808, 0, 0),
	('2020-07-22 05:07:27', '2020-07-22 05:08:28', 17, 616, 0, 0),
	('2020-07-22 05:09:20', '2020-07-22 05:10:20', 18, 19360, 0, 0),
	('2020-07-22 05:10:57', '2020-07-22 05:10:57', 19, 18372, 0, 0),
	('2020-07-22 05:12:06', '2020-07-22 05:12:06', 20, 9180, 0, 0),
	('2020-07-22 05:14:29', '2020-07-22 05:15:30', 21, 12028, 0, 0),
	('2020-07-22 05:16:17', '2020-07-22 05:47:37', 22, 20700, 0, 0),
	('2020-07-22 05:18:30', '2020-07-22 05:18:30', 23, 21456, 0, 0),
	('2020-07-22 05:19:16', '2020-07-22 05:19:16', 24, 18112, 0, 0),
	('2020-07-22 05:19:54', '2020-07-22 05:21:54', 25, 19448, 0, 0),
	('2020-07-22 05:22:20', '2020-07-22 05:22:21', 26, 6676, 0, 0),
	('2020-07-22 05:23:50', '2020-07-22 05:23:51', 27, 11744, 0, 0),
	('2020-07-22 05:25:04', '2020-07-22 05:25:05', 28, 18260, 0, 0),
	('2020-07-22 05:26:03', '2020-07-22 05:26:04', 29, 13852, 0, 0),
	('2020-07-22 05:27:31', '2020-07-22 05:31:32', 30, 9332, 0, 0),
	('2020-07-22 05:32:26', '2020-07-22 05:32:26', 31, 13868, 0, 0),
	('2020-07-22 05:34:02', '2020-07-22 07:41:20', 32, 19792, 0, 0),
	('2020-07-22 05:36:29', '2020-07-22 05:36:30', 33, 20736, 0, 0),
	('2020-07-22 05:37:54', '2020-07-22 05:38:55', 34, 11528, 0, 0),
	('2020-07-22 05:39:38', '2020-07-22 05:39:38', 35, 21188, 0, 0),
	('2020-07-22 05:40:51', '2020-07-22 05:41:52', 36, 1244, 0, 0),
	('2020-07-22 05:42:23', '2020-07-22 05:42:23', 37, 20796, 0, 0),
	('2020-07-22 05:43:20', '2020-07-22 05:44:21', 38, 5760, 0, 0),
	('2020-07-22 05:45:33', '2020-07-22 05:45:34', 39, 6568, 0, 0),
	('2020-07-22 05:48:22', '2020-07-22 05:48:22', 40, 11536, 0, 0),
	('2020-07-22 05:49:22', '2020-07-22 05:49:22', 41, 9868, 0, 0),
	('2020-07-22 05:50:18', '2020-07-22 05:50:19', 42, 4004, 0, 0),
	('2020-07-22 05:51:39', '2020-07-22 05:51:40', 43, 20024, 0, 0),
	('2020-07-22 05:56:39', '2020-07-22 05:56:39', 44, 18044, 0, 0),
	('2020-07-22 05:57:16', '2020-07-22 05:58:16', 45, 21312, 0, 0),
	('2020-07-22 06:00:22', '2020-07-22 06:00:23', 46, 2072, 0, 0),
	('2020-07-22 06:06:41', '2020-07-22 06:07:41', 47, 11504, 0, 0),
	('2020-07-22 06:08:18', '2020-07-22 06:12:19', 48, 1992, 0, 0),
	('2020-07-22 06:13:36', '2020-07-22 06:13:37', 49, 20564, 0, 0),
	('2020-07-22 06:14:32', '2020-07-22 06:14:33', 50, 16020, 0, 0),
	('2020-07-22 06:15:44', '2020-07-22 06:25:44', 51, 12348, 0, 0),
	('2020-07-22 07:40:14', '2020-07-22 07:40:15', 52, 4080, 0, 0),
	('2020-07-22 08:03:36', '2020-07-22 08:03:36', 53, 22364, 0, 0),
	('2020-07-22 08:04:20', '2020-07-22 08:04:20', 54, 8540, 0, 0),
	('2020-07-22 08:04:56', '2020-07-22 08:07:57', 55, 12968, 0, 0),
	('2020-07-22 08:09:08', '2020-07-22 08:11:09', 56, 21464, 0, 0),
	('2020-07-22 08:11:36', '2020-07-22 08:11:36', 57, 3380, 0, 0),
	('2020-07-22 08:12:42', '2020-07-22 08:12:43', 58, 6632, 0, 0),
	('2020-07-22 08:13:28', '2020-07-22 10:41:30', 59, 22824, 0, 0),
	('2020-07-22 14:06:03', '2020-07-22 20:03:51', 60, 9376, 0, 0),
	('2020-07-22 20:12:06', '2020-07-22 22:20:07', 61, 19480, 0, 0),
	('2020-07-22 22:21:21', '2020-07-22 22:22:22', 62, 5312, 0, 0),
	('2020-07-22 22:23:29', '2020-07-22 22:23:29', 63, 20088, 0, 0),
	('2020-07-22 22:24:11', '2020-07-22 23:56:11', 64, 14772, 0, 0),
	('2020-07-23 00:07:53', '2020-07-23 00:10:54', 65, 2132, 0, 0),
	('2020-07-23 00:13:34', '2020-07-23 00:13:34', 66, 7984, 0, 0),
	('2020-07-23 00:14:26', '2020-07-23 00:14:26', 67, 23460, 0, 0),
	('2020-07-23 00:15:27', '2020-07-23 04:07:28', 68, 11016, 1, 0);
/*!40000 ALTER TABLE `api_command_pid` ENABLE KEYS */;

-- Volcando estructura para tabla api_database.api_log
CREATE TABLE IF NOT EXISTS `api_log` (
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `method` varchar(255) NOT NULL,
  `sendSizeKB` int(11) NOT NULL,
  `elapsedTimeInS` double DEFAULT NULL,
  `receiveSizeKB` int(11) DEFAULT NULL,
  `isAvelon` tinyint(4) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `tokenId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_a5127200c15cc70b0f403018530` (`userId`),
  KEY `FK_49bd6cad57b4f9b2889f27fb05c` (`tokenId`),
  CONSTRAINT `FK_49bd6cad57b4f9b2889f27fb05c` FOREIGN KEY (`tokenId`) REFERENCES `api_o_auth2_token` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_a5127200c15cc70b0f403018530` FOREIGN KEY (`userId`) REFERENCES `api_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla api_database.api_log: ~-1 rows (aproximadamente)
DELETE FROM `api_log`;
/*!40000 ALTER TABLE `api_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_log` ENABLE KEYS */;

-- Volcando estructura para tabla api_database.api_log_request
CREATE TABLE IF NOT EXISTS `api_log_request` (
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `body` text,
  `url` varchar(255) NOT NULL,
  `method` varchar(255) NOT NULL,
  `logId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_3d38062178f40bdb64d7302383` (`logId`),
  CONSTRAINT `FK_3d38062178f40bdb64d7302383c` FOREIGN KEY (`logId`) REFERENCES `api_log` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla api_database.api_log_request: ~-1 rows (aproximadamente)
DELETE FROM `api_log_request`;
/*!40000 ALTER TABLE `api_log_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_log_request` ENABLE KEYS */;

-- Volcando estructura para tabla api_database.api_log_response
CREATE TABLE IF NOT EXISTS `api_log_response` (
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `body` text,
  `statusCode` int(11) NOT NULL,
  `logId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_863adda23c7345a2a3a10847c7` (`logId`),
  CONSTRAINT `FK_863adda23c7345a2a3a10847c73` FOREIGN KEY (`logId`) REFERENCES `api_log` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla api_database.api_log_response: ~-1 rows (aproximadamente)
DELETE FROM `api_log_response`;
/*!40000 ALTER TABLE `api_log_response` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_log_response` ENABLE KEYS */;

-- Volcando estructura para tabla api_database.api_o_auth2_token
CREATE TABLE IF NOT EXISTS `api_o_auth2_token` (
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accessToken` varchar(255) NOT NULL,
  `accessTokenExpiresAt` datetime NOT NULL,
  `refreshToken` varchar(255) NOT NULL,
  `refreshTokenExpiresAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_6641be3065fb4f67b3e700131b1` (`userId`),
  CONSTRAINT `FK_6641be3065fb4f67b3e700131b1` FOREIGN KEY (`userId`) REFERENCES `api_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla api_database.api_o_auth2_token: ~-1 rows (aproximadamente)
DELETE FROM `api_o_auth2_token`;
/*!40000 ALTER TABLE `api_o_auth2_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_o_auth2_token` ENABLE KEYS */;

-- Volcando estructura para tabla api_database.api_service_expiration
CREATE TABLE IF NOT EXISTS `api_service_expiration` (
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `serviceType` enum('1','2') NOT NULL,
  `expirationDate` datetime NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla api_database.api_service_expiration: ~-1 rows (aproximadamente)
DELETE FROM `api_service_expiration`;
/*!40000 ALTER TABLE `api_service_expiration` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_service_expiration` ENABLE KEYS */;

-- Volcando estructura para tabla api_database.api_sync_entity
CREATE TABLE IF NOT EXISTS `api_sync_entity` (
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `appName` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `isUpdated` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla api_database.api_sync_entity: ~-1 rows (aproximadamente)
DELETE FROM `api_sync_entity`;
/*!40000 ALTER TABLE `api_sync_entity` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_sync_entity` ENABLE KEYS */;

-- Volcando estructura para tabla api_database.api_table
CREATE TABLE IF NOT EXISTS `api_table` (
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `size` int(11) DEFAULT NULL,
  `isActive` tinyint(4) NOT NULL,
  `zoneId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_fa3cefc6e93fbc99d2f7708001` (`id`),
  KEY `FK_635a6eee6e08191f9fad9241dd1` (`zoneId`),
  CONSTRAINT `FK_635a6eee6e08191f9fad9241dd1` FOREIGN KEY (`zoneId`) REFERENCES `api_zone` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla api_database.api_table: ~-1 rows (aproximadamente)
DELETE FROM `api_table`;
/*!40000 ALTER TABLE `api_table` DISABLE KEYS */;
INSERT INTO `api_table` (`createdAt`, `updatedAt`, `id`, `name`, `size`, `isActive`, `zoneId`) VALUES
	('2020-07-22 08:09:09', '2020-07-22 08:09:09', 1, 'Table 1', 6, 1, NULL),
	('2020-07-22 21:18:51', '2020-07-22 22:16:50', 6, 'ERTE', 54, 1, 5),
	('2020-07-22 22:24:36', '2020-07-22 22:24:36', 7, 'Mesa 2', 24, 1, 5),
	('2020-07-22 22:24:44', '2020-07-22 22:24:44', 8, 'Mesa 3', 1, 1, 3),
	('2020-07-22 23:34:36', '2020-07-22 23:34:37', 9, 'Primera mesa ', 6, 1, 8);
/*!40000 ALTER TABLE `api_table` ENABLE KEYS */;

-- Volcando estructura para tabla api_database.api_user
CREATE TABLE IF NOT EXISTS `api_user` (
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `employedId` int(11) DEFAULT NULL,
  `reset_password_token` varchar(255) DEFAULT NULL,
  `hasWarehouse` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_fffceda84bb725e711070e8f98` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla api_database.api_user: ~-1 rows (aproximadamente)
DELETE FROM `api_user`;
/*!40000 ALTER TABLE `api_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `api_user` ENABLE KEYS */;

-- Volcando estructura para tabla api_database.api_zone
CREATE TABLE IF NOT EXISTS `api_zone` (
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `isActive` tinyint(4) NOT NULL DEFAULT '0',
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e1f85dd6e085614da3376b0a38` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla api_database.api_zone: ~-1 rows (aproximadamente)
DELETE FROM `api_zone`;
/*!40000 ALTER TABLE `api_zone` DISABLE KEYS */;
INSERT INTO `api_zone` (`createdAt`, `updatedAt`, `id`, `name`, `isActive`, `description`) VALUES
	('2020-07-22 05:07:33', '2020-07-22 23:35:04', 3, 'Zona 1', 1, 'Hola'),
	('2020-07-22 05:12:05', '2020-07-22 23:31:06', 5, 'ZA2', 1, 'Zona 2 para las personas'),
	('2020-07-22 05:14:30', '2020-07-22 05:14:30', 7, 'Zona 3', 1, 'Es la zona 3 de prueba'),
	('2020-07-22 23:34:15', '2020-07-22 23:34:15', 8, 'Zona4Z', 1, 'La zona z');
/*!40000 ALTER TABLE `api_zone` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
