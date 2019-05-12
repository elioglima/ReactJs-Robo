CREATE TABLE `usuario` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) DEFAULT NULL,
  `senha` varchar(100) DEFAULT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `grupo` int(11) DEFAULT NULL,
  `cadastro_data` datetime DEFAULT NULL,
  `alteracao_data` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

INSERT INTO `usuario` (`email`, `nome`, `grupo`, `cadastro_data`, `alteracao_data`) 
  VALUES ('diretoria@maxtime.info', 'Elio GOnçalves de Lima', '1', '2019-05-10 15:43:00', '2019-05-10 15:43:00');


INSERT INTO `usuario` (`email`, `nome`, `grupo`, `cadastro_data`, `alteracao_data`) 
  VALUES ('abigail@maxtime.info', 'Abigail de Lima', '1', '2019-05-10 15:43:00', '2019-05-10 15:43:00');