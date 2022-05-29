create table PlacaDeVideo(
PlacaDeVideoId int(4) auto_increment not null primary key,
PlacaDeVideoModelo varchar(30) not null);

create table JogoPlacaDeVideo(
JogoId int(4),
PlacaDeVideoId int(4),
primary key(JogoId, PlacaDeVideoId),
foreign key(JogoId) references Jogo(JogoId),
foreign key(PlacaDeVideoId) references PlacaDeVideo(PlacaDeVideoId)
);


Create table JogoEstilo(
JogoId int(4),
EstiloId int(4),
primary key(JogoId, EstiloId),
foreign key(JogoId) references Jogo(JogoId),
foreign key(EstiloId) references Estilo(EstiloId)
);

create table JogoProcessador(
JogoId int(4),
ProcessadorId int(4),
primary key(JogoId, ProcessadorId),
foreign key(JogoId) references Jogo(JogoId),
foreign key(ProcessadorId) references Processador(ProcessadorId)
);

