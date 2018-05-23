-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-05-2018 a las 19:49:44
-- Versión del servidor: 10.1.25-MariaDB
-- Versión de PHP: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hotel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oferta_hotel`
--

CREATE TABLE `oferta_hotel` (
  `id` int(11) NOT NULL,
  `imagen` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_entrada` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_salida` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `comunidad` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `provincia` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `municipio` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `estrellas` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `wifi` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `piscina` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `playa` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `actividades` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `comida` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `spa` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `observaciones` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `price` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `oferta_hotel`
--

INSERT INTO `oferta_hotel` (`id`, `imagen`, `nombre`, `fecha_entrada`, `fecha_salida`, `comunidad`, `provincia`, `municipio`, `estrellas`, `wifi`, `piscina`, `playa`, `actividades`, `comida`, `spa`, `observaciones`, `price`) VALUES
(1, '/Hotel/media/default-avatar.png', 'dsa', '29/03/2018', '30/03/2018', 'ARAGÃ“N', 'HUESCA', 'ABIZANDA', '3', '', '', '', '', '', '', 'das', '11'),
(2, '/Hotel/media/default-avatar.png', 'dsa', '30/03/2018', '31/03/2018', 'ARAGÃ“N', 'ZARAGOZA', 'AGÃ“N', '3', '', '', '', '', '', '', 'dsa', '1'),
(3, '/Hotel/media/default-avatar.png', 'das', '29/03/2018', '31/03/2018', 'ARAGÃ“N', 'TERUEL', 'ABEJUELA', '3', '', '', '', '', '', '', 'dsa', '1'),
(5, '/Hotel/media/default-avatar.png', 'dsa', '30/03/2018', '31/03/2018', 'ANDALUCÃA', 'ALMERÃA', 'ABRUCENA', '4', 'true', '', 'true', '', 'true', '', 'dd', '1'),
(6, '/Hotel/media/default-avatar.png', 'das', '13/04/2018', '20/04/2018', 'CEUTA', 'CEUTA', 'CEUTA', '3', '', '', '', 'true', '', '', 'dasd', '11'),
(7, '/Hotel/media/default-avatar.png', 'kjb', '12/04/2018', '16/04/2018', 'ARAGÃ“N', 'HUESCA', 'ABIEGO', '3', '', 'true', '', '', '', '', 'kk', '22'),
(8, '/Hotel/media/default-avatar.png', 'das', '09/04/2018', '11/04/2018', 'ARAGÃ“N', 'TERUEL', 'ABEJUELA', '3', '', 'true', '', '', '', '', 'das', '22'),
(9, '/Hotel/media/default-avatar.png', 'das', '09/04/2018', '11/04/2018', 'ARAGÃ“N', 'TERUEL', 'ABEJUELA', '3', '', 'true', '', '', '', '', 'das', '22'),
(10, '/Hotel/media/default-avatar.png', 'das', '09/04/2018', '10/04/2018', 'PRINCIPADO DE ASTURIAS', 'PRINCIPADO DE ASTURIAS', 'ALLER', '3', '', 'true', '', '', 'true', '', 'dsa', '12'),
(11, '/Hotel/media/default-avatar.png', 'dsa', '09/04/2018', '19/04/2018', 'ARAGÃ“N', 'HUESCA', 'ADAHUESCA', '3', 'true', '', '', '', '', '', 'dasas', '22'),
(12, '/Hotel/media/default-avatar.png', 'dsa', '09/04/2018', '19/04/2018', 'ARAGÃ“N', 'HUESCA', 'ADAHUESCA', '3', 'true', '', '', '', '', '', 'dasas', '22'),
(13, '/Hotel/media/default-avatar.png', 'asd', '09/04/2018', '18/04/2018', 'ARAGÃ“N', 'TERUEL', 'AGUAVIVA', '3', 'true', '', '', '', '', '', 'ng', '21'),
(14, '/Hotel/media/default-avatar.png', 'das', '09/04/2018', '20/04/2018', 'PRINCIPADO DE ASTURIAS', 'PRINCIPADO DE ASTURIAS', 'ALLER', '3', '', 'true', '', '', '', '', 'das', '12'),
(15, '/Hotel/media/default-avatar.png', 'das', '09/04/2018', '10/04/2018', 'PRINCIPADO DE ASTURIAS', 'PRINCIPADO DE ASTURIAS', 'ALLER', '3', '', 'true', '', '', 'true', '', 'bvf', '312'),
(16, '/Hotel/media/default-avatar.png', 'das', '11/04/2018', '20/04/2018', 'PRINCIPADO DE ASTURIAS', 'PRINCIPADO DE ASTURIAS', 'ALLER', '3', '', 'true', 'true', '', '', '', 'das', '22'),
(17, '/Hotel/media/default-avatar.png', 'das', '11/04/2018', '20/04/2018', 'PRINCIPADO DE ASTURIAS', 'PRINCIPADO DE ASTURIAS', 'ALLER', '3', '', 'true', 'true', '', '', '', 'das', '22'),
(18, '/Hotel/media/default-avatar.png', 'das', '10/04/2018', '20/04/2018', 'PRINCIPADO DE ASTURIAS', 'PRINCIPADO DE ASTURIAS', 'ALLER', '3', '', 'true', 'true', '', '', '', 'das', '22'),
(19, '/Hotel/media/default-avatar.png', 'dsa', '10/04/2018', '21/04/2018', 'ANDALUCÃA', 'ALMERÃA', 'ABRUCENA', '3', '', '', 'true', 'true', 'true', '', 'dsa', '22'),
(20, '/Hotel/media/default-avatar.png', 'dsa', '11/04/2018', '20/04/2018', 'ARAGÃ“N', 'TERUEL', 'AGUATÃ“N', '3', '', 'true', '', 'true', '', '', 'dsa', '22'),
(21, '/Hotel/media/default-avatar.png', 'cc', '11/04/2018', '13/04/2018', 'ANDALUCÃA', 'CÃDIZ', 'ALCALÃ', '3', '', 'true', 'true', '', '', '', 'das', '11'),
(22, '/Hotel/media/default-avatar.png', 'dsa', '13/04/2018', '28/04/2018', 'ARAGÃ“N', 'HUESCA', 'ABIZANDA', '3', '', 'true', '', '', '', '', 'dsadsa', '22'),
(26, '/Hotel/media/default-avatar.png', 'cvxz', '09/04/2018', '19/04/2018', 'ANDALUCÃA', 'ALMERÃA', 'ABRUCENA', '3', '', 'true', '', '', '', '', 'das', '22'),
(27, '/Hotel/media/default-avatar.png', 'dsa', '09/04/2018', '11/04/2018', 'ANDALUCÃA', 'CÃDIZ', 'ALCALÃ', '3', '', '', '', '', 'true', '', 'ds', '2'),
(28, '/Hotel/media/default-avatar.png', 'dsa', '10/04/2018', '20/04/2018', 'ANDALUCÃA', 'ALMERÃA', 'ADRA', '5', '', '', '', 'true', 'true', '', 'dsa', '22'),
(29, '/Hotel/media/1125642501-anadir.png', 'dsa', '12/04/2018', '17/04/2018', 'MURCIA', 'REGIÃ“N DE MURCIA', 'CEHEGÃN', '5', '', 'true', 'true', '', '', '', 'dsadsa', '21'),
(30, '/Hotel/media/1859432184-anadir.png', 'dsadsa', '13/04/2018', '28/04/2018', 'NAVARRA', 'COMUNIDAD FORAL DE NAVARRA', 'ANUE', '3', '', 'true', 'true', '', 'true', '', 'dsa', '22'),
(31, '/Hotel/media/284972402-anadir.png', 'dasd', '12/04/2018', '28/04/2018', 'MADRID', 'COMUNIDAD DE MADRID', 'BATRES', '5', '', 'true', 'true', '', 'true', 'true', 'dsa', '23'),
(32, '/Hotel/media/default-avatar.png', 'das', '13/04/2018', '18/04/2018', 'ARAGÃ“N', 'HUESCA', 'ABIEGO', '4', 'true', 'true', 'true', '', '', '', 'das', '34'),
(33, '/Hotel/media/default-avatar.png', 'dsa', '20/04/2018', '27/04/2018', 'ARAGÃ“N', 'HUESCA', 'ADAHUESCA', '5', 'true', '', 'true', '', 'true', '', 'dsadsadd', '233'),
(34, '/Hotel/media/default-avatar.png', 'das', '20/04/2018', '28/04/2018', 'PRINCIPADO DE ASTURIAS', 'PRINCIPADO DE ASTURIAS', 'ALLANDE', '4', '', 'true', '', 'true', '', 'true', 'ds', '22'),
(35, '/Hotel/media/default-avatar.png', 'dsa', '20/04/2018', '28/04/2018', 'ARAGÃ“N', 'HUESCA', 'ABIZANDA', '3', '', 'true', '', 'true', '', '', 'dsa', '33'),
(36, '/Hotel/media/default-avatar.png', 'dddddd', '20/04/2018', '26/04/2018', 'ARAGÃ“N', 'TERUEL', 'ABEJUELA', '3', 'true', '', 'true', '', 'true', '', 'ds', '22'),
(37, '/Hotel/media/default-avatar.png', 'dassdddddd', '21/04/2018', '27/04/2018', 'MELILLA', 'MELILLA', 'MELILLA', '3', 'true', '', '', '', '', '', 'd', '32'),
(38, '/Hotel/media/default-avatar.png', 'das', '24/04/2018', '25/04/2018', 'NAVARRA', 'COMUNIDAD FORAL DE NAVARRA', 'AÃ‘ORBE', '4', '', 'true', '', 'true', 'true', '', 'dsad', '22'),
(39, '/Hotel/media/default-avatar.png', 'dsa', '26/04/2018', '28/04/2018', 'MADRID', 'COMUNIDAD DE MADRID', 'BATRES', '4', 'true', '', 'true', '', '', '', 'dsa', '22'),
(40, '/Hotel/media/default-avatar.png', 'sda', '24/04/2018', '27/04/2018', 'ARAGÃ“N', 'TERUEL', 'AGUATÃ“N', '3', '', 'true', '', 'true', '', '', 'das', '3'),
(41, '/Hotel/media/default-avatar.png', 'dsa', '25/04/2018', '28/04/2018', 'ARAGÃ“N', 'TERUEL', 'ABEJUELA', '3', '', 'true', '', 'true', '', '', 'dsa', '22'),
(42, '/Hotel/media/default-avatar.png', 'dsa', '25/04/2018', '28/04/2018', 'ANDALUCÃA', 'CÃDIZ', 'ALCALÃ', '3', '', 'true', '', 'true', '', '', 'das', '32'),
(43, '/Hotel/media/default-avatar.png', 'gfdsa', '25/04/2018', '28/04/2018', 'ARAGÃ“N', 'HUESCA', 'ALBALATILLO', '3', '', '', '', 'true', '', 'true', 'das', '43'),
(44, '/Hotel/media/default-avatar.png', 'dsa', '25/04/2018', '28/04/2018', 'ARAGÃ“N', 'ZARAGOZA', 'ACERED', '3', '', 'true', '', '', '', 'true', 'das', '32'),
(45, '/Hotel/media/default-avatar.png', 'dsa', '23/05/2018', '24/05/2018', 'ARAGÃ“N', 'TERUEL', 'ALIAGA', '3', 'true', '', '', '', '', '', 'das', '2'),
(46, '/Hotel/media/default-avatar.png', 'a', '24/05/2018', '31/05/2018', 'ARAGÃ“N', 'TERUEL', 'ABEJUELA', '5', '', 'true', '', '', '', '', 'ds', '22'),
(47, '/Hotel/media/default-avatar.png', 'd', '24/05/2018', '31/05/2018', 'ARAGÃ“N', 'HUESCA', 'ABIZANDA', '3', '', '', '', 'true', '', '', 'ds', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recover_pass`
--

CREATE TABLE `recover_pass` (
  `email` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `tokken` varchar(255) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `recover_pass`
--

INSERT INTO `recover_pass` (`email`, `tokken`) VALUES
('destrictor.gg@gmail.com', '0ab5b2c852d1a935feb4ae95f8f41eaa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `tokken` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `activo` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `birthday` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `nombre`, `email`, `pass`, `tokken`, `activo`, `avatar`, `birthday`) VALUES
(28, 'a', 'destrictor.gg@gmail.com', '$2y$10$7yumVeVRrSekxiRllsBTcugmmsur9VzoIglVoXQIJva5Z/zDO.IR2', '949e6f49eb1160b6ec79db990b189f91', 'yes', '/Hotel/media/default-avatar.png', '28/05/2018'),
(29, 's', 'a@gmail.com', '$2y$10$W77jpUr5T7Y734YB.AnXLub0HxpJA9MdBFKQ/lW3t39m53Qh4rq12', 'd6649d306a2573fff1cad9cdaba85c18', 'no', '/Hotel/media/default-avatar.png', ''),
(30, 'admin', 'aa@gmail.com', '$2y$10$ikQoeHqcYgTAemW3csP.Re3uIyduTzcyt26g54uzsMl.U22Pu6Xni', '1000aa5052087703425378c1d6870c39', 'no', '/Hotel/media/default-avatar.png', ''),
(31, 'dddd', 'ass@gmail.com', '$2y$10$xMNo0UjvpK7D8WVgGwGW9ua9g2IGOMoPOGVLx.J5Aq4TV43z.72la', '051b2f8d4d8470a7e619d522ef8951bc', 'no', '/Hotel/media/default-avatar.png', ''),
(32, 'cccccccc', 'aaaa@gmail.com', '$2y$10$ffhpvRr/O/gGzU.Ywy8tJuhehfYXnfcFvaHd5mmjybQ2Q/r/.wVIu', '5ba20d84d2af864ede3b38de8551c0d9', 'no', '/Hotel/media/default-avatar.png', ''),
(33, 'f', 'ajh@gmail.com', '$2y$10$wzTo68a8tGBHlzPYUdRI/eKINU6/ubbFeQU8LYDzMb5nGFP8Kjsj6', 'bb1bf0081c7e7ec83b9250d9faf788b6', 'no', '/Hotel/media/default-avatar.png', ''),
(34, 'aakkm', 'lkka@gmail.com', '$2y$10$Lji0yWyvZoYkRydd30lbC.DIucHkUlQjZKEGHI5mdEp3JZ6WgV0Z6', 'e5769355e42f44c420384794bb7121fc', 'no', '/Hotel/media/default-avatar.png', ''),
(35, 'sda', 'a123@gmail.com', '$2y$10$u5T5AFWED6t7vDPGAwJwNOA/QUMwgBfC4GHKg5hNm/hML28M5fGa6', '0e0e0a954f4bca9f359c6528f67fd2a9', 'no', '/Hotel/media/default-avatar.png', ''),
(36, '43f', 'b@gmail.com', '$2y$10$hlPGlOSYLhpOyAfBDJ7gK.mlZJEzs.RmXwy43AYIup6tAq3uAazga', 'cbeebd464cd364794c6ea1d756bb3951', 'no', '/Hotel/media/default-avatar.png', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_social`
--

CREATE TABLE `user_social` (
  `id` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `birthday` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `user_social`
--

INSERT INTO `user_social` (`id`, `email`, `username`, `avatar`, `birthday`) VALUES
('02ipeqnF2QVtbqSDxDuGv0HlTF22', '', 'Yo', 'https://pbs.twimg.com/profile_images/378800000231335312/b572a21c469c299ce6288ab07b20ee33_normal.jpeg', ''),
('Wdn6RO3rUbeKeUidZo3jrtIjWuw1', 'sergiohuertas1@hotmail.com', 'Sergio Huertas', 'https://graph.facebook.com/825260184347119/picture', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `oferta_hotel`
--
ALTER TABLE `oferta_hotel`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user_social`
--
ALTER TABLE `user_social`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `oferta_hotel`
--
ALTER TABLE `oferta_hotel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
