CREATE DATABASE Meu_PC_Roda;

USE Meu_PC_Roda;

CREATE TABLE Jogo (
    JogoId             INTEGER(4) AUTO_INCREMENT,
    JogoNome         VARCHAR(30) NOT NULL,
    JogoPreco         DECIMAL(5,2) NOT NULL,
    JogoRam            INTEGER(2) NOT NULL,
    JogoArmazenamento    INTEGER(2) NOT NULL,
    JogoTier			INTEGER(2) NOT NULL,
    PRIMARY KEY (JogoId)
);

CREATE TABLE Estilo (
    EstiloId        INTEGER(4) AUTO_INCREMENT,
    EstiloDescricao        VARCHAR(30) NOT NULL,
    PRIMARY KEY (EstiloId)
);

CREATE TABLE Processador (
    ProcessadorId        INTEGER(4),
    ProcessadorModelo    VARCHAR(30) NOT NULL,
    ProcessadorTier			INTEGER(2) NOT NULL,
    PRIMARY KEY (ProcessadorId)
);