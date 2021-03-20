
/* Crear residencia*/
INSERT INTO residencia 
VALUES(1, "Av. Principal El Cafetal", "Caracas", "Baruta", "Miranda", "Mari Mare", true);


/* Crear edificios cada uno con sus apartamentos*/
INSERT INTO edificios
VALUES(1, "Mari Mare A", 2, 2, 1, true, 1);

INSERT INTO edificios
VALUES(2, "Mari Mare B", 4, 3, 1, true, 1);

INSERT INTO edificios
VALUES(3, "Mari Mare C", 3, 4, 1, true, 1);

INSERT INTO apartamentos
VALUES(1, 1, 1, 11, 10, true);

INSERT INTO apartamentos
VALUES(2, 1, 1, 12, 10, true);

INSERT INTO apartamentos
VALUES(3, 1, 2, 21, 10, true);

INSERT INTO apartamentos
VALUES(4, 1, 2, 22, 10, true);

INSERT INTO apartamentos
VALUES(5, 2, 1, 11, 60, true);

INSERT INTO apartamentos
VALUES(6, 2, 2, 21, 60, true);

INSERT INTO apartamentos
VALUES(7, 2, 3, 31, 60, true);

INSERT INTO apartamentos
VALUES(8, 3, 1, 11, 42, true);

INSERT INTO apartamentos
VALUES(9, 3, 3, 32, 42, true);

INSERT INTO apartamentos
VALUES(10, 3, 2, 27, 42, true);


/* Crear usuarios*/
INSERT INTO usuarios
VALUES(1, "Gebrayel", "Inatti", 0, "gebrayelinnati@gmail.com", "04146969420", "2000-11-6", 27666420, true);

INSERT INTO usuarios
VALUES(2, "Rocco", "Madonna", 1, "roccomadonna@gmail.com", "04144206969", "2000-11-4", 27622117, true);

INSERT INTO usuarios
VALUES(3, "Rommel", "Sanzonneti", 1, "rommelsanzonneti@gmail.com", "04140000001", "2000-9-8", 28000000, true);

INSERT INTO usuarios
VALUES(4, "Barack", "Obama", 1, "barackobama@gmail.com", "04241616787", "1969-7-6", 1, true);

INSERT INTO usuarios
VALUES(5, "Harry", "Styles", 1,"harrystyles@gmail.com", "04140008800", "1994-2-1", 27000111, true);

INSERT INTO usuarios
VALUES(6, "Menor", "De Edad", 1, "menor@gmail.com", "04145555555", "2014-2-1", 33311323, true);

INSERT INTO usuarios
VALUES(7, "Mayor", "De Edad", 1, "mayor@gmail.com", "04147977472", "2013-12-31", 27622118, true);

/* Crear tipos de usuarios*/
INSERT INTO tipousuarios
VALUES(1, "Dueno", true);

INSERT INTO tipousuarios
VALUES(2, "Habitante", true);

/* Crear tipos de gasto y gastos*/
INSERT INTO tipogastos
VALUES(1, "General", true);


INSERT INTO tipogastos
VALUES(2, "Particular", true);


/* Crear gastos */
INSERT INTO gastos
VALUES(1, "Jardineria", 420, true, 1);

INSERT INTO gastos
VALUES(2, "Piscina", 600, true, 1);

INSERT INTO gastos
VALUES(3, "Salon de Fiesta", 60, true, 2);


/* Crear metodos de pago y pagos*/
INSERT INTO metodopagos
VALUES(1, "Zelle", true);


INSERT INTO metodopagos
VALUES(2, "Transferencia", true);


INSERT INTO pagos
VALUES(1, 1, 42, true);

INSERT INTO pagos
VALUES(2, 2, 60, true);

INSERT INTO pagos
VALUES(3, 1, 42, true);


/* Crear facturas*/
INSERT INTO facturas
VALUES(1, "2021-03-08", "2021-08-04", true);

INSERT INTO facturas
VALUES(2,  "2021-02-15", "2021-08-15", true);

INSERT INTO facturas
VALUES(3, "2021-04-07", "2021-09-04",  true);

INSERT INTO facturas
VALUES(4, "2021-04-07", "2021-09-04",  true);

INSERT INTO facturas
VALUES(5, "2021-01-07", "2021-02-04",  true);

INSERT INTO facturas
VALUES(6, "2021-01-08", "2021-02-04",  true);

INSERT INTO facturas
VALUES(7, "2021-01-09", "2021-02-04",  true);

/* Llenar la tabla de relacion para usuarios dueños y habitantes de apartamentos*/
INSERT INTO userapartamentos
VALUES(1,1,1, 1);

INSERT INTO userapartamentos
VALUES(2,1,1, 2);

INSERT INTO userapartamentos
VALUES(3,2,2, 1);

INSERT INTO userapartamentos
VALUES(4,3,3, 1);

INSERT INTO userapartamentos
VALUES(5,5,3, 1);

INSERT INTO userapartamentos
VALUES(6,5,3, 2);

INSERT INTO userapartamentos
VALUES(7,6,4, 2);

INSERT INTO userapartamentos
VALUES(8,7,5, 1);

INSERT INTO userapartamentos
VALUES(9,7,5, 2);

INSERT INTO userapartamentos
VALUES(10,8,6, 1);

INSERT INTO userapartamentos
VALUES(11,8,6, 2);

INSERT INTO userapartamentos
VALUES(12,9,6, 1);

INSERT INTO userapartamentos
VALUES(13,10,7, 1);

INSERT INTO userapartamentos
VALUES(14,10,7, 1);


/* Llenar la tabla de relacion para edificios y gastos*/
INSERT INTO edificio_gastos
VALUES(1,1, 1, true);

INSERT INTO edificio_gastos
VALUES(2,1, 2, true);

INSERT INTO edificio_gastos
VALUES(3,1, 3, true);

INSERT INTO edificio_gastos
VALUES(4,2, 1, true);

INSERT INTO edificio_gastos
VALUES(5,2, 2, true);

INSERT INTO edificio_gastos
VALUES(6,2, 3, true);

INSERT INTO edificio_gastos
VALUES(7,3, 1, true);

INSERT INTO edificio_gastos
VALUES(8,3, 2, true);

INSERT INTO edificio_gastos
VALUES(9,3, 3, true);

/* Llenar la tabla de relacion para factura y pago*/
INSERT INTO pago_facturas
VALUES(1,1,1, 1, 42);

INSERT INTO pago_facturas
VALUES(2,2,2, 5, 42);

INSERT INTO pago_facturas
VALUES(3,3,3, 10, 42);


/* Llenar la tabla de relacion para apartamento y factura*/
INSERT INTO apartamento_facturas
VALUES(1, 1, 1, 42);

INSERT INTO apartamento_facturas
VALUES(2, 2, 5, 60);

INSERT INTO apartamento_facturas
VALUES(3, 3, 10, 42);

INSERT INTO apartamento_facturas
VALUES(4, 4, 10, 42);

INSERT INTO apartamento_facturas
VALUES(5, 5, 10, 42);

INSERT INTO apartamento_facturas
VALUES(6, 6, 10, 42);

INSERT INTO apartamento_facturas
VALUES(7, 7, 10, 42);

/* Llenar la tabla que relaciona apartamento y gastos particulares*/

INSERT INTO apartamento_gastos
VALUES(1, 1, 3, true); 

INSERT INTO apartamento_gastos
VALUES(2, 3, 3, true); 

INSERT INTO apartamento_gastos
VALUES(3, 7, 3, true); 

/* Llenar la tabla que relaciona factura y gastos*/

INSERT INTO factura_gastos
VALUES(1, 1, 3);

INSERT INTO factura_gastos
VALUES(2, 1, 2);

INSERT INTO factura_gastos
VALUES(3, 1, 3);

INSERT INTO factura_gastos
VALUES(4, 2, 1);

INSERT INTO factura_gastos
VALUES(5, 2, 2);

INSERT INTO factura_gastos
VALUES(6, 3, 1);

INSERT INTO factura_gastos
VALUES(7, 3, 1);

INSERT INTO factura_gastos
VALUES(8, 4, 1);

INSERT INTO factura_gastos
VALUES(9, 5, 1);

INSERT INTO factura_gastos
VALUES(10, 6, 1);

INSERT INTO factura_gastos
VALUES(11, 6, 2);

INSERT INTO factura_gastos
VALUES(12, 7, 1);

INSERT INTO factura_gastos
VALUES(13, 7, 2);