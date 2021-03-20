
CREATE TABLE IF NOT EXISTS apartamento_facturas(
	id int not null auto_increment,
	FacturaId int not null,
    ApartamentoId int not null,
    monto float not null,
    primary key(id)
);



CREATE TABLE IF NOT EXISTS apartamento_gastos(
	id int not null auto_increment,
    ApartamentoId int not null,
    GastoId int not null,
    active boolean not null,
    primary key(id)
);



CREATE TABLE IF NOT EXISTS apartamentos(
	id int not null auto_increment,
    edificioId int not null, /*ver como hacer foreign key*/
    piso int not null,
    aptoNum int not null,
    alicuota float not null, 
    active boolean not null,
    primary key(id)
);


CREATE TABLE IF NOT EXISTS edificio_gastos(
	id int not null auto_increment,
	EdificioId int not null,
    GastoId int not null,
    active boolean not null,
    primary key(id)
);





CREATE TABLE IF NOT EXISTS edificios(
	id int not null auto_increment,
    nombre varchar(255) not null,
    pisos int not null,
    aptosPPiso int not null,
    ResidenciaId int not null,
    active boolean not null,
    primary key(id)
);


CREATE TABLE IF NOT EXISTS factura_gastos(
	id int not null auto_increment,
    FacturaId int not null,
    GastoId int not null,
    primary key(id)
);



CREATE TABLE IF NOT EXISTS facturas(
	id int not null auto_increment,
    fechaDeCreacion date not null,
    fechaDeVencimiento date not null,
    active boolean not null,
    primary key(id)
);



CREATE TABLE IF NOT EXISTS gastos(
	id int not null auto_increment,
    nombre varchar(255) not null,
    monto int not null,
    active boolean not null,
    TipoGastoId int not null,
    primary key(id)
);


CREATE TABLE IF NOT EXISTS metodopagos(
	id int not null auto_increment,
    metodo varchar(255) not null,
    active boolean not null,
    primary key(id)
);




CREATE TABLE IF NOT EXISTS pago_facturas(
	id int not null auto_increment,
	PagoId int not null,
    FacturaId int not null,
    ApartamentoId int not null,
    montoPago int not null,
    primary key(id)
);




CREATE TABLE IF NOT EXISTS pagos(
	id int not null auto_increment,
    metodoPagoId int not null,
    monto float not null,
    active boolean not null,
    primary key(id)
);



CREATE TABLE IF NOT EXISTS residencia(
	id int not null auto_increment,
    calle varchar(255) not null,
    ciudad varchar(255) not null,
    municipio varchar(255) not null,
    estado varchar(255) not null,
    nombre varchar(255) not null,
    active boolean not null,
    primary key(id)
);


CREATE TABLE IF NOT EXISTS tipogastos(
	id int not null auto_increment,
    tipo varchar(255) not null,
    active boolean not null,
    primary key(id)
);


CREATE TABLE IF NOT EXISTS tipousuarios(
	id int not null auto_increment,
	tipo varchar(255),
    active boolean not null,
    primary key(id)
);



CREATE TABLE IF NOT EXISTS userapartamentos(
	id int not null,
    ApartamentoId int not null,
    UsuarioId int not null,
    TipoUsuarioId int not null,
    primary key(id)
);




CREATE TABLE IF NOT EXISTS usuarios(
	id int not null auto_increment,
    nombre varchar(255) not null,
    apellido varchar(255) not null,
    rol int not null,
    correo varchar(255) not null,
    numeroTelf varchar(255) not null,
    fechaDeNacimiento date not null,
    cedula int not null,
    active boolean not null,
    primary key(id)
);



/*Creacion de las foreign keys*/
ALTER TABLE apartamento_facturas ADD foreign key(FacturaId) references facturas(id);
ALTER TABLE apartamento_facturas ADD foreign key(ApartamentoId) references apartamentos(id);
ALTER TABLE apartamento_gastos ADD foreign key(ApartamentoId) references apartamentos(id);
ALTER TABLE apartamento_gastos ADD foreign key(GastoId) references gastos(id);
ALTER TABLE edificio_gastos ADD foreign key(EdificioId) references edificios(id);
ALTER TABLE edificio_gastos ADD foreign key(GastoId) references gastos(id);
ALTER TABLE factura_gastos ADD foreign key(FacturaId) references facturas(id);
ALTER TABLE factura_gastos ADD foreign key(GastoId) references gastos(id);
ALTER TABLE pago_facturas ADD foreign key(PagoId) references pagos(id);
ALTER TABLE pago_facturas ADD foreign key(FacturaId) references facturas(id);
ALTER TABLE pago_facturas ADD foreign key(ApartamentoId) references apartamentos(id);
ALTER TABLE userapartamentos ADD foreign key(ApartamentoId) references apartamentos(id);
ALTER TABLE userapartamentos ADD foreign key(UsuarioId) references usuarios(id);
ALTER TABLE userapartamentos ADD foreign key(TipoUsuarioId) references tipousuarios(id);



