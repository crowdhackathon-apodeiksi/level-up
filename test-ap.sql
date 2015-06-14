SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;


CREATE TABLE IF NOT EXISTS `epixeiriseis` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `epixeirisi_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `afm` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `eponymia` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `dieythinsi` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

CREATE TABLE IF NOT EXISTS `epixeiriseis_apodeikseis` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `epixeirisi_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `apodeiksi_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `afm` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `aaapodeiksis` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `imerominia` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `ora` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `synolikiaksia` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `aksiafpa` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `ccn` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `code` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

CREATE TABLE IF NOT EXISTS `epixeiriseis_prosfores` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `epixeirisi_id` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `prosfora_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `kodikos_prosforas` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `titlos` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `keimeno` varchar(278) COLLATE utf8_unicode_ci NOT NULL,
  `pontoi` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `kerdos` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `clicks` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `katigoria` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

CREATE TABLE IF NOT EXISTS `katanalotes` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `katanalotis_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `afm` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `onoma` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `eponymo` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `pontoi` int(11) NOT NULL,
  `synolikoipontoi` int(10) NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

CREATE TABLE IF NOT EXISTS `katanalotes_apodeikseis` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `katanalotis_id` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `apodeiksi_id` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `afm` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  `aaapodeiksis` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `imerominia` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `ora` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `synolikiaksia` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `aksiafpa` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `ccn` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `code` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `katigoria` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `dimosiopoiisi` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=183 ;

CREATE TABLE IF NOT EXISTS `katanalotes_prosfores` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `katanalotis_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `prosfora_id` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=27 ;

CREATE TABLE IF NOT EXISTS `superuser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `onoma` varchar(50) NOT NULL,
  `eponymo` varchar(50) NOT NULL,
  `vraveia` text NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
