-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Tempo de geração: 24-Out-2020 às 20:13
-- Versão do servidor: 10.4.13-MariaDB
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fullstack`

-- Banco de dados da loja virtual full stack eletro

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id_pedidos` int(100) NOT NULL AUTO_INCREMENT,
  `nome_cliente` varchar(50) NOT NULL,
  `endereco` varchar(150) NOT NULL,
  `telefone` int(15) NOT NULL,
  `nome_produto` varchar(50) NOT NULL,
  `valor_unitario` decimal(8,2) NOT NULL,
  `quantidade` int(100) NOT NULL,
  `valor_total` decimal(8,2) NOT NULL,
  PRIMARY KEY (`id_pedidos`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`id_pedidos`, `nome_cliente`, `endereco`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`) 

  VALUES
      (1, 'Vitória Emanuelly Vieira', 'Rua FV 8, numero 730, Residencial Forteville, Goiânia, GO', 38154315, 'geladeira', '5199.00', 1, '5199.00'),

      (2, 'Samuel Márcio Araújo', 'Travessa São Mateus 688, Cinturão Verde, Boa Vista, RR, ', 26787685, 'geladeira', '1499.00', 1, '1499.00'),

      (3, 'Caroline Maria Fernanda Pereira', 'Rua Conde de Porto Alegre 236, Rocha, Rio de Janeiro, RJ', 29828505, 'geladeira', '5019.00', 1, '5019.00'),

      (4, 'Rita Clarice Clara Freitas', 'Rodovia BR-381 Fernão Dias 165, Petrópolis, Betim, MG', 36984566, 'fogao', '1561.47', 1, '1561.47'),

      (5, 'Nelson Bento Luiz Souza', 'Rua das Éricas 103, Mangabeira, João Pessoa, PB', 39251413, 'fogao', '389.99', 1, '389.99'),

      (6, 'Sarah Isis Baptista', 'Avenida Mato Grosso 109, Centro, Campo Grande, MS', 39320560, 'micro', '494.90', 1, '494.90'),

      (7, 'Mirella Heloise da Rocha', 'Rua Senegal 978, Lagoa Grande, Feira de Santana, BA', 29470469, 'micro', '611.90', 1, '611.90'),

      (8, 'Clara Jennifer Vieira', 'Rua Bacaré 685, Aleixo, Manaus, AM', 25733675, 'micro', '494.90', 1, '494.90'),

      (9, 'Victor Geraldo Rodrigo Costa', 'Rua Pioneiro José Pereira de Gois 554, Morada do Bosque, Cacoal, RO', 27467979, 'lava_loucas', '5019.00', 1, '5019.00'),

      (10, 'Luiz Igor Bernardo Costa', 'Alameda Dezenove 354, Aeroporto Velho, Santarém, PA', 35199899, 'lava_roupa', '5019.00', 1, '5019.00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `id_produtos` int(100) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco` decimal(8,2) NOT NULL,
  `nome_imagens` varchar(50) NOT NULL,
  PRIMARY KEY (`id_produtos`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id_produtos`, `nome`, `descricao`, `preco`, `nome_imagens`) 

  VALUES
      (1, 'geladeira', 'Geladeira Electrolux 579L Duplex DM84X Inox', '5199.00', 'imagens/geladeira2.jpeg'),

      (2, 'geladeira', 'Geladeira Esmaltec RCD34 Preto 276L 110V - 375L\r\n\r\n', '1499.00', 'imagens/geladeira.jpeg'),

      (3, 'geladeira', 'Geladeira Frost Free Brastemp Side Inverse 540 Litros\r\n\r\n', '5019.00', 'imagens/geladeira3.jpeg'),

      (4, 'fogao', 'Fogão 5 Bocas Consul Acendimento Automático\r\n\r\n', '1561.47', 'imagens/fogao.jpeg'),

      (5, 'fogao', '5 bocas a gas bivolt acendimento automático Braslar\r\n\r\n', '389.99', 'imagens/fogao2.jpeg'),

      (6, 'micro', 'Micro-ondas 20 Litros Consul com Porta Espelhada e Puxador\r\n\r\n', '494.90', 'imagens/micro2.jpeg'),

      (7, 'micro', 'Micro-ondas Consul- Branco 32L\r\n\r\n', '611.90', 'imagens/micro.jpeg'),

      (8, 'micro', 'Micro-ondas 20 Litros Consul com Porta Espelhada e Puxador\r\n\r\n', '494.90', 'imagens/micro3.jpeg'),

      (9, 'lava_loucas', 'Lava louças\r\n\r\n', '5019.00', 'imagens/lavar1.jpeg'),

      (10, 'lava_loucas', 'Lava louças\r\n', '5019.00', 'imagens/lavar1.jpeg'),

      (11, 'lava_roupa', 'Lava roupas\r\n\r\n', '5019.00', 'imagens/lavar2.jpeg'),

      (12, 'lava_roupa', 'lava roupas\r\n\r\n', '5019.00', 'imagens/lavar3.jpeg');
      COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;