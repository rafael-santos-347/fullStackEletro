DROP DATABASE IF EXISTS `fullstack`;
CREATE DATABASE IF NOT EXISTS `fullstack`;
USE `fullstack`;
DROP TABLE IF EXISTS `contato`;

--
-- Estrutura da tabela `contato`
--


CREATE TABLE IF NOT EXISTS `contato` (
  `id_contato` int(50) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `mensagem` varchar(500) NOT NULL,
  `data` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_contato`)
)DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `contato`
--

INSERT INTO `contato` (`id_contato`, `nome`, `mensagem`, `data`) VALUES
(1, 'test', 'test', '2020-10-30 21:31:08'),
(2, 'testtt', 'estt', '2020-10-30 21:37:08'),
(3, 'aaaa', 'aaaaa', '2020-10-30 21:37:35'),
(4, 'bb', 'bbb', '2020-10-30 21:38:19'),
(5, '', '', '2020-10-30 21:54:46');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id_pedidos` int(100) NOT NULL AUTO_INCREMENT,
  `nome_cliente` varchar(50) NOT NULL,
  `endereco` varchar(150) NOT NULL,
  `telefone` int(50) NOT NULL,
  `nome_produto` varchar(50) NOT NULL,
  `valor_unitario` decimal(8,2) NOT NULL,
  `quantidade` int(100) NOT NULL,
  `valor_total` decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (`id_pedidos`)
)DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`id_pedidos`, `nome_cliente`, `endereco`, `telefone`, `nome_produto`, `valor_unitario`, `quantidade`, `valor_total`) VALUES
(1, 'Vitória Emanuelly Vieira', 'Rua FV 8, numero 730, Residencial Forteville, Goiânia, GO', 38154315, 'geladeira', '5199.00', 1, '5199.00'),
(2, 'Samuel Márcio Araújo', 'Travessa São Mateus 688, Cinturão Verde, Boa Vista, RR, ', 26787685, 'geladeira', '1499.00', 1, '1499.00'),
(3, 'Caroline Maria Fernanda Pereira', 'Rua Conde de Porto Alegre 236, Rocha, Rio de Janeiro, RJ', 29828505, 'geladeira', '5019.00', 1, '5019.00'),
(4, 'Rita Clarice Clara Freitas', 'Rodovia BR-381 Fernão Dias 165, Petrópolis, Betim, MG', 36984566, 'fogao', '1561.47', 1, '1561.47'),
(5, 'Nelson Bento Luiz Souza', 'Rua das Éricas 103, Mangabeira, João Pessoa, PB', 39251413, 'fogao', '389.99', 1, '389.99'),
(6, 'Sarah Isis Baptista', 'Avenida Mato Grosso 109, Centro, Campo Grande, MS', 39320560, 'microondas', '494.90', 1, '494.90'),
(7, 'Mirella Heloise da Rocha', 'Rua Senegal 978, Lagoa Grande, Feira de Santana, BA', 29470469, 'microondas', '611.90', 1, '611.90'),
(8, 'Clara Jennifer Vieira', 'Rua Bacaré 685, Aleixo, Manaus, AM', 25733675, 'microondas', '494.90', 1, '494.90'),
(9, 'Victor Geraldo Rodrigo Costa', 'Rua Pioneiro José Pereira de Gois 554, Morada do Bosque, Cacoal, RO', 27467979, 'lava_loucas', '5019.00', 1, '5019.00'),
(10, 'Luiz Igor Bernardo Costa', 'Alameda Dezenove 354, Aeroporto Velho, Santarém, PA', 35199899, 'lava_roupas', '5019.00', 1, '5019.00'),
(11, 'Isabella Isabelle Corte Real', 'Rua BarÃ£o de Suassuna', 25812754, 'geladeira', '51999.00', 2, 5199.00);

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
)DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id_produtos`, `nome`, `descricao`, `preco`, `nome_imagens`) VALUES
(1, 'geladeira', 'Geladeira Electrolux 579L Duplex DM84X Inox', '5199.00', 'imagens/geladeira2.jpeg'),
(2, 'geladeira', 'Geladeira Esmaltec RCD34 Preto 276L 110V - 375L', '1499.00', 'imagens/geladeira.jpeg'),
(3, 'geladeira', 'Geladeira Frost Free Brastemp Side Inverse 540 Litros', '5019.00', 'imagens/geladeira3.jpeg'),
(4, 'fogao', 'Fogão 5 Bocas Consul Acendimento Automático', '1561.47', 'imagens/fogao.jpeg'),
(5, 'fogao', '5 bocas a gas bivolt acendimento automático Braslar', '389.99', 'imagens/fogao2.jpeg'),
(6, 'microondas', 'Micro-ondas 20 Litros Consul com Porta Espelhada e Puxador', '494.90', 'imagens/micro2.jpeg'),
(7, 'microondas', 'Micro-ondas Consul- Branco 32L', '611.90', 'imagens/micro.jpeg'),
(8, 'microondas', 'Micro-ondas 20 Litros Consul com Porta Espelhada e Puxador', '494.90', 'imagens/micro3.jpeg'),
(9, 'lava_loucas', 'Lava louças', '5019.00', 'imagens/lavar1.jpeg'),
(10, 'lava_loucas', 'Lava louças', '5019.00', 'imagens/lavar1.jpeg'),
(11, 'lava_roupas', 'Lava roupas', '5019.00', 'imagens/lavar2.jpeg'),
(12, 'lava_roupas', 'lava roupas', '5019.00', 'imagens/lavar3.jpeg');