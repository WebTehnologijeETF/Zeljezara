-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2015 at 11:12 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `wt8`
--

-- --------------------------------------------------------

--
-- Table structure for table `komentar`
--

CREATE TABLE IF NOT EXISTS `komentar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `novost` int(11) NOT NULL,
  `tekst` text COLLATE utf8_slovenian_ci NOT NULL,
  `autor` varchar(20) COLLATE utf8_slovenian_ci NOT NULL,
  `vrijeme` timestamp NOT NULL,
  `email` varchar(30) COLLATE utf8_slovenian_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `novost` (`novost`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `komentar`
--

INSERT INTO `komentar` (`id`, `novost`, `tekst`, `autor`, `vrijeme`, `email`) VALUES
(1, 1, 'Denisa Zvizdić je lopov!!!', 'Autor Autoric', '2015-05-28 21:08:47', 'autor@gmail.com'),
(2, 2, 'Ne mogu niti jednog radnika zaposlit,a ne njih 600!!', 'Aure', '2015-05-28 21:10:11', 'kon@hotmail.com'),
(3, 3, 'LOPOVIIII!!', 'Posten', '2015-05-28 21:10:11', 'jle@gmail.com'),
(4, 4, 'Nece to niko kupiti, nisu ljudi ludi da ulazu pare u lopove!!', 'Krele', '2015-05-28 21:11:01', 'mn@etf.unsa.ba');

-- --------------------------------------------------------

--
-- Table structure for table `novost`
--

CREATE TABLE IF NOT EXISTS `novost` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `naslov` varchar(100) COLLATE utf8_slovenian_ci NOT NULL,
  `tekst` text COLLATE utf8_slovenian_ci NOT NULL,
  `autor` varchar(20) COLLATE utf8_slovenian_ci NOT NULL,
  `vrijeme` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_slovenian_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `novost`
--

INSERT INTO `novost` (`id`, `naslov`, `tekst`, `autor`, `vrijeme`) VALUES
(1, 'Posjeta predsjedavajućeg Vijeća ministara BiH Željezari Ilijaš', 'Posjeta predsjedavajućeg Vijeća ministara BiH Denisa Zvizdića Željezari je jako bitna, jer je ohrabrila radnike i građane Ilijaša, izjavio je danas izvršni direktor te firme i član vladine Radne grupe za pregovore sa strateškim partnerima.', 'Muris Nuhodžić', '2015-05-28 21:05:36'),
(2, 'U željezari u Ilijašu radit će 500 do 600 radnika', 'Prvobitne nade premijera Vlade Kantona Sarajevo Elmedina Konakovića kako bi u ilijaškoj željezari nakon preuzimanja od talijanske firme Acciaierije Bertoli Safau (ABS), članice grupacije Danieli, moglo nastaviti raditi 500 do 600 radnika ipak bi se, čini se, mogle ostvariti.', 'Muris Nuhodžić', '2015-05-28 21:05:36'),
(3, 'Ilijaška željezara uskoro dobiva novog vlasnika?', 'Slovačka Podbrezova, grupacija Danielli iz Italije i CIOS iz Hrvatske - tri su ponuđača koji se natječu kako bi postali novim vlasnikom Željezare Ilijaš. Pregovori su pri kraju i jedna od ovih ponuda vrlo je blizu realizaciji, potvrdio je novinarima premijer Vlade Kantona Sarajevo Elmedin Konaković.', 'Muris Nuhodžić', '2015-05-28 21:07:22'),
(4, 'Ima nade za Željezaru Ilijaš, stigle prve ponude', 'Uprava Željezare Ilijaš je prije nekoliko dana obavijestila radnike da je zaprimila nekoliko ponuda za kupnju Željezare. Glavni povjerenik Sindikata metalaca je rekao da im je čelništvo Željezare najavilo da će ponude biti otvorene do kraja mjeseca.', 'Muris Nuhodžić', '2015-05-28 21:07:22');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `komentar`
--
ALTER TABLE `komentar`
  ADD CONSTRAINT `komentar_ibfk_1` FOREIGN KEY (`novost`) REFERENCES `novost` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
